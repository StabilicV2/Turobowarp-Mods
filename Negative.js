class negative {
  getInfo() {
    return {
      id: 'negative',
      name: 'Negative',
      blocks: [
        {
          opcode: 'negative',
          blockType: Scratch.BlockType.REPORTER,
          text: '- [NUMBER]',
          arguments: {
            NUMBER: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '7.635'
            }
          }
        }
      ],
    };
  }
  negative(args) {
    return -args.NUMBER;
  }
}
Scratch.extensions.register(new negative());