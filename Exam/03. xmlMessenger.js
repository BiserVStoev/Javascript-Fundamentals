function validate(input) {
    let pattern = /^<message\s+(([a-z]+="[\w.\s]+"\s*)+)>([\s\S]*)<\/message>$/gm;

    if(pattern.test(input)){
        let matched = pattern.exec(input);
        let match = pattern.exec(input);

        let matchedGroup = match[1];
        let message = match[3];
		
        let recieverPattern = /to="[\w.\s]+"/g;
        let senderPattern = /from="[\w.\s]+"/g;

        if(!matchedGroup.match(recieverPattern) || !matchedGroup.match(senderPattern)){
            console.log('Missing attributes');
        } else {
            let sender = matchedGroup.match(senderPattern)[0].split('=')[1].split('');
            sender.pop();
            sender.shift();
            sender = sender.join('');

            let reciever = matchedGroup.match(recieverPattern)[0].split('=')[1].split('');
            reciever.pop();
            reciever.shift();
            reciever = reciever.join('');

            console.log('<article>')
            console.log(`\t<div>From: <span class="sender">${sender}</span></div>`);
            console.log(`\t<div>To: <span class="recipient">${reciever}</span></div>`);
            console.log('\t<div>')
            message = message.split('\n');
            for (let line of message) {
                console.log(`\t\t<p>${line}</p>`)
            }

            console.log('\t</div>')
            console.log('</article>')

        }

    } else{
        console.log('Invalid message format');
    }
}

//validate(`<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old
//Let's go out for a beer</message>`);

validate(`<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old
Let's go out for a beer</message>`);

//validate('<message from="John Doe" to="Alice">Not much, just chillin. How about you?</message>');