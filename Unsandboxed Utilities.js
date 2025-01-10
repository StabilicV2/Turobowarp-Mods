class Utility { //* Extension itself
  getInfo() {
      return {
          id: 'utils',
          name: 'Utility',
          blocks: [
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
Scratch.extensions.register(new Utility());