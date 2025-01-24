class dividedec {
    getInfo() {
        return {
            id: 'div',
            name: 'Divide',
            blocks: [
                {
                    opcode: 'div',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Divide [ONE] by [TWO] with [DEC] decimal accuracy',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '10'
                        },
                        TWO: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '3'
                        },
                        DEC: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '2'
                        }
                    }
                }
            ]
        }
    }
    div(args) {
        let Value = Math.round((args.ONE / args.TWO) * Math.pow(10, args.DEC)) / Math.pow(10, args.DEC);
        return Value
    }
}
Scratch.extensions.register(new dividedec());