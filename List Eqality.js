class ListEquality {
  getInfo() {
    return {
      id: 'listequality',
      name: 'List Equality',
      blocks: [
        {
          opcode: 'listEquality',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[INPUT] is found in [LIST]?',
          arguments: {
            LIST: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'example'
            },
            INPUT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'example'
            }
          }
        }
      ]
    };
  } 
  listEquality(args) {
    return args.LIST.includes(args.INPUT);
  }
}
Scratch.extensions.register(new ListEquality());