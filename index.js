// code your solution here
function saturdayFun(answer = "roller-skate") {
  return `This Saturday, I want to ${answer}!`;
}
saturdayFun();
function mondayWork(answer = "go to the office") {
  return `This Monday, I will ${answer}.`;
}
mondayWork();

function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

const encouragingPromptFunction = wrapAdjective("||");
