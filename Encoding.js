class Encoding {
    getInfo() {
        return {
            id: 'encode',
            name: 'Encoding',
            blocks: [
                {
                    opcode: 'encode',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Encode [TEXT] using [ENCODING]',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Hello'
                        },
                        ENCODING: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'ENCODING_MENU',
                        }
                    }
                }
            ],
            menus: {
                ENCODING_MENU: {
                    items: ['Base64', 'UTF-8', 'ASCII']
                }
            }
        };
    }

    encode(args) {
        if (args.ENCODING === 'Base64') {
            return btoa(args.TEXT);
        } else if (args.ENCODING === 'UTF-8') {
            return encodeURIComponent(args.TEXT);
        } else if (args.ENCODING === 'ASCII') {
            const array = [];
                for (let i = 0; i < args.TEXT.length; i++) {
                    array[i] = args.TEXT.charCodeAt(i);
            }
            const string = array.join(' ');
            return string;
        }
    }
}
Scratch.extensions.register(new Encoding());