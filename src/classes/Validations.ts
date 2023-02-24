
let openParenthesisCounter = 0;
let closeParenthesisCounter = 0;
import { mainScreen, operators, parenthesis } from "./Variables";

export class Validations{
  
    openParenthesis(){
      if(!isNaN(mainScreen.innerHTML)){
        mainScreen.innerHTML += "*(";
      }else{
        mainScreen.innerHTML += "(";
      }
      openParenthesisCounter++;
      parenthesis.innerHTML = openParenthesisCounter;
    }
    
    closeParenthesis(){
      if (openParenthesisCounter > 0) {
        let lastEntry = mainScreen.innerHTML.slice(-1);
        if (closeParenthesisCounter == 0 && lastEntry == "(") {
          mainScreen.innerHTML += "0)";
        } else {
          mainScreen.innerHTML += ")";  
        }
        openParenthesisCounter--;
        closeParenthesisCounter++;
        parenthesis.innerHTML = openParenthesisCounter;
        if (openParenthesisCounter == 0) {
            closeParenthesisCounter = 0;
            mainScreen.innerHTML += "*";
            parenthesis.innerHTML = "";
        }
      }
    }
  
    validateInput(value:string) {
      let lastEntry = mainScreen.innerHTML.slice(-1);
      if (operators.includes(value)) {
        if (operators.includes(lastEntry)) {
          return false;
        } else {
          return true;
        }
      }
      return true;
    }
     
  }