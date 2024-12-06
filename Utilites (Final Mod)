(function(Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) { //* Unsandboxed extension
        throw new Error('Must run unsandboxed');
    }
class Utility { //* Extension itself
    constructor() { //! Constructor for VM internals
        this.vm = Scratch.vm;
        this.vm.target = this.vm.runtime.getEditingTarget();
        this.targetX = this.vm.target.x; // Track target X position
        this.targetY = this.vm.target.y; // Track target Y position
        this.velocityX = 0; // Velocity in X direction
        this.velocityY = 0; // Velocity in Y direction
        this.animationFrameId = null; // Track animation frame
    }
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
                { //* Movement operator
                    opcode: 'movement',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Move [STEP]',
                    arguments: {
                        STEP: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '20'
                        }
                    }
                }
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
    movement(args) { //* Movement function
        const animate = () => {
            // Smoothly move sprite toward target position using velocity
            this.vm.target.x += this.velocityX;
            this.vm.target.y += this.velocityY;
            this.vm.target.setXY(this.vm.target.x, this.vm.target.y);

            // If the velocity is not zero, keep animating
            if (this.velocityX !== 0 || this.velocityY !== 0) {
                this.animationFrameId = requestAnimationFrame(animate);
            } else {
                this.animationFrameId = null; // Stop animation
            }
        };
        //TODO: Fix the issues on left/right movement not functioning properly
        document.addEventListener('keydown', (event) => {
            // Incrementally adjust velocity based on key presses
            if (event.key === 'ArrowRight' || event.key === 'd') {
                if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                    this.velocityX = 0; // Reset X velocity
                } 
                //* After velocityX has been reset it is immediately overwritten by the next line
                this.velocityX = args.STEP * 0.1; //! This is the problem
            }
            if (event.key === 'ArrowLeft' || event.key === 'a') {
                if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { 
                    this.velocityX = 0; // Reset X velocity
                } 
                //* After velocityX has been reset it is immediately overwritten by the next line
                this.velocityX = -args.STEP * 0.1; //! This is the problem
            }
            if (event.key === 'ArrowDown' || event.key === 's') {
                this.velocityY = -args.STEP * 0.1; // Adjust Y velocity
            }
            if (event.key === 'ArrowUp' || event.key === 'w') {
                this.velocityY = args.STEP * 0.1; // Adjust Y velocity
            }

            // Start animation loop if not already running
            if (!this.animationFrameId) {
                animate();
            }
        });

        document.addEventListener('keyup', (event) => {
            // Stop movement when keys are released
            if (['ArrowRight', 'ArrowLeft', 'd', 'a'].includes(event.key)) {
                this.velocityX = 0; // Reset X velocity
            }
            if (['ArrowUp', 'ArrowDown', 'w', 's'].includes(event.key)) {
                this.velocityY = 0; // Reset Y velocity
            }
        });
    }
}
Scratch.extensions.register(new Utility());
})(Scratch);