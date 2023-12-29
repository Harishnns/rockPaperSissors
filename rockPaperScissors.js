const getUserChoice = (userInput) =>{
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
    }else{
      return 'invalid input';
    }
  }
  const getComputerChoice= () => {
    let randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissors';
      break;
    }
  }
  const determineWinner =(getUserChoice,getComputerChoice)=>{
    if(getUserChoice === getComputerChoice){
      return 'The game was a tie'
    }
    if(getUserChoice === 'rock'){
      if(getComputerChoice === 'paper'){
        return 'The Computer Won!';
      }else{
        return 'User Won';
      }
    }
    if(getUserChoice === 'paper'){
      if(getComputerChoice === 'scissors'){
        return 'The Computer Won!'
      }else{
        return 'User Won';
      }
    }
    if(getUserChoice === 'scissors'){
      if(getComputerChoice === 'rock'){
        return 'The Computer Won!'
      }else{
        return 'User Won';
      }
    }
  }
  
  const playGame = ()=>{
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
  };
  playGame();
  
  