class Letters {
    getInfo() {
        return {
            id: 'letters',
            name: 'Letters',
            blocks: [
            { //* Letter operator
                opcode: 'letter',
                blockType: Scratch.BlockType.REPORTER,
                text: 'Letter(s) [FIRST] to [SECOND] of [STRING]',
                arguments: {
                    FIRST: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: '1'
                    },
                    SECOND: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: '5'
                    },
                    STRING: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'Hello World'
                    }
                }

            }
        ]
        }
    }
letter(args) {
    let array = [];
    for (let i = args.FIRST; i <= args.SECOND; i++)
    {
        array.push(args.STRING[i - 1]);
    }
    const joinedarray = array.join('');
    return joinedarray;
}
}
Scratch.extensions.register(new Letters());
