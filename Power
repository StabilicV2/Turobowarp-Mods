class Power {
    getInfo() {
        return {
            id: 'powers',
            name: 'Powers',
            blocks: [
                {
                    opcode: 'powers',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Raise [BASE] to the power of [EXPONENT]',
                    arguments: {
                        BASE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '2'
                        },
                        EXPONENT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '7'
                        }
                    }
                }
            ]
        };
    }

    powers(args) {
        return Math.pow(args.BASE, args.EXPONENT);
    }
}
Scratch.extensions.register(new Power());