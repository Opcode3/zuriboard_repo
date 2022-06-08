const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);



async function game(){
    let stage = await manage_user();
    playGame(stage);
}

const manage_user = async () => {
    const name = await prompt('Enter your username: ');
    if(name.trim().length > 2){
        console.log(`Player Name: ${name}`);
        return 1;
    }else{
        alert('The players name is required to continue playing this game...');
        return manage_user();
    }
}

const playGame = async (stage) => {
    console.log(`Welcome to the number guessing game program Stage 1.. \n`)
    while(true){
        const guessNumber = Number.parseInt(generate_number(stage + 1));
        const prediction = Number.parseInt(await prompt("QUESTION => Guess the just generated number: "));
        
        if(prediction === guessNumber){
            console.log(
                `Your guess is correct. You just made it to stage ${++stage}...`
            );
        }else{
            console.log(
                "Oooooops! Your guess is incorrect!\nGame is terminated..."
            );
            rl.close();
            break;
        }

        



    }
}

const generate_number = (range) => {
    const randomize = Math.floor(Math.random() * range) + 1;
    // console.log(`Randomize: ${randomize}`)
    return randomize;
} 


const prompt = async (instruction) => {
    return new Promise(resolve => {
        rl.question(instruction, (answer) => resolve(answer))
    })
}




game() 
