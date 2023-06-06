function saturdayFun(param = "roller-skate") {
    return `This Saturday, I want to ${param}!`
}

function mondayWork(argue = "go to the office") {
    return `This Monday, I will ${argue}.`;
}

function wrapAdjective(example = "*") {
    return function (word = "special"){
        return `You are ${example}${word}${example}!`
    }
}
