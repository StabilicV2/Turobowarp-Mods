const blockIcon ="data:image/jpeg;base64,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"

class StableUtility { //* Extension itself
  getInfo() {
      return {
          id: 'utils',
          name: 'Stable Utilities',
          color1: "#32a852",
          menuIconURI: blockIcon,
          blocks: [ //> All opcodes and blocks are listed here
              { //* Rounding operator
                  opcode: 'round',
                  blockType: Scratch.BlockType.REPORTER,
                  text: 'Round [INPUT] to [PRECISION] decimal places',
                  arguments: {
                      INPUT: {
                          type: Scratch.ArgumentType.NUMBER,
                          defaultValue: '7.635'
                      },
                      PRECISION: {
                          type: Scratch.ArgumentType.NUMBER,
                          defaultValue: '2'
                      }
                  }
              },
              '---',
              { //* ASCII operator
                  opcode: 'ascii', //* ASCII function
                  blockType: Scratch.BlockType.REPORTER,
                  text: 'Convert [TEXT] to ASCII',
                  arguments: {
                      TEXT: {
                          type: Scratch.ArgumentType.STRING,
                          defaultValue: 'A'
                      }
                  }
              },
              '---',
              { //* Powers operator
                  opcode: 'powers', //* Powers function
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
              },
              '---',
              { //* Encoding operator
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
              },
              '---',
              { //* Decoding operator
                  opcode: 'decode',
                  blockType: Scratch.BlockType.REPORTER,
                  text: 'Decode [TEXT] using [DECODING]',
                  arguments: {
                      TEXT: {
                          type: Scratch.ArgumentType.STRING,
                          defaultValue: 'SGVsbG8='
                      },
                      DECODING: {
                          type: Scratch.ArgumentType.STRING,
                          menu: 'DECODING_MENU',
                      }
                  }
              },
              '---',
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

              },
              '---',
              { //* List Equality operator
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
              },
              '---',
              { //* Several Equalities operator
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
              },
          ],
          menus: { //* Dropdown menus
              ENCODING_MENU: {
                  acceptsReporters: false,
                  items: ['Base64', 'UTF-8', 'ASCII']
              },
              DECODING_MENU: {
                  acceptsReporters: false,
                  items: ['Base64', 'UTF-8', 'ASCII']
              }
          }
      }
  }

  //! Functions
  round(args) { //* Rounding function
      let RoundedValue = Math.round(args.INPUT * Math.pow(10, args.PRECISION)) / Math.pow(10, args.PRECISION);
      return RoundedValue
  }
  ascii(args) { //* ASCII function
      const array = [];
      for (let i = 0; i < args.TEXT.length; i++) {
          array[i] = args.TEXT.charCodeAt(i);
      }
      return array;
  }
  powers(args) { //* Powers function
      return Math.pow(args.BASE, args.EXPONENT);
  }
  encode(args) { //* Encoding function
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
  decode(args) { //* Decoding function
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
  letter(args) { //* Letter function
      let array = [];
      for (let i = args.FIRST; i <= args.SECOND; i++)
      {
          array.push(args.STRING[i - 1]);
      }
      const joinedarray = array.join('');
      return joinedarray;
  }
  listEquality(args) { //* List Equality function
      return args.LIST.includes(args.INPUT);
  }
  severalEqual(args) { //* Several Equalities function
      return args.A === args.B || args.A === args.C;
  }
}
Scratch.extensions.register(new StableUtility());