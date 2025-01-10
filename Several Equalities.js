class SeveralEqualities {
  getInfo() {
    return {
      id: 'severalEqualities',
      name: 'Several Equalities',
      blocks: [
        {
          opcode: 'severalEqual',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[A] = [B] or [C]?',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '10'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '5'
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '6'
            },
          }
        }
      ]
    };  
  }
  severalEqual(args) {
    return args.A === args.B || args.A === args.C;
  }
}
Scratch.extensions.register(new SeveralEqualities());