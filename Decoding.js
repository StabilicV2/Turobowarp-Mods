class Decoding {
    getInfo() {
        return {
            id: 'encode',
            name: 'Decoding',
            blocks: [
                {
                    opcode: 'decode',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Decode [TEXT] using [DECODING]',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Hello'
                        },
                        DECODING: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'DECODING_MENU',
                        }
                    }
                }
            ],
            menus: {
                DECODING_MENU: {
                    acceptReporters: false,
                    items: ['Base64', 'UTF-8', 'ASCII']
                }
            }
        };
    }

    decode(args) {
        if (args.DECODING === 'Base64') {
            return atob(args.TEXT);
        } else if (args.DECODING === 'UTF-8') {
                return decodeURIComponent(args.TEXT);
        } else if (args.DECODING === 'ASCII') {
            let Input = args.TEXT; 
            if (typeof Input === "number") {
              Input = String(Input); 
            }
            const Values = Input.match(/\d+/g);
            if (Values) {
              const Decode = Values
                .map(num => String.fromCharCode(Number(num)))
                .join('');
              return Decode;
            } else {
              return NaN;
            }
            
        }
    }
}
Scratch.extensions.register(new Decoding());