class ASCII { //All in one word
    getInfo() {
        return {
            id: 'asc', //No uppercase
            name: 'ASCII', //Any string
            blocks: [
                {
                    opcode: 'ascii', //No uppercase
                    blockType:Scratch.BlockType.REPORTER, //In capital letters
                    text: 'Convert [TEXT] to ASCII',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'A'
                        }
                    }
                    }
                ]
            };
        }

        ascii(args) {
            const array = [];
                for (let i = 0; i < args.TEXT.length; i++) {
                    array[i] = args.TEXT.charCodeAt(i);
            }
            return array;
        }
    }

//Other statements go here

Scratch.extensions.register(new ASCII());

