let thankYouMessage = [];

function writeCards (strings, event) {    

    for (let i = 0; i < strings.length; i++) {
        let messages = `Thank you, ${strings[i]}, for the wonderful ${event} gift!`;
        thankYouMessage.push(messages);
    }

    console.log(thankYouMessage);
    return thankYouMessage;
    
}

function countDown(number) {
    let countDown = number
    while (countDown >= 0 ) {
        console.log(countDown--)
    }
}

