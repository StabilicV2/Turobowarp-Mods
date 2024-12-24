//This creates an unsandboxed extension with error catching

(function(Scratch) {
    'use strict';
    
    if (!Scratch.extensions.unsandboxed) {
    throw new Error('Must run unsandboxed');
    }
    
    class move { //All in one word
        constructor() {
            this.vm = Scratch.vm;
            this.vm.target = this.vm.runtime.getEditingTarget();
        }
        getInfo() {
            return {
                id: 'move', //No uppercase
                name: 'Movement', //Any string
                blocks: [
                    {
                        opcode: 'm', //No uppercase
                        blockType:Scratch.BlockType.COMMAND, //In capital letters
                        //This creates an argument line with one term
                        text: 'Move [X]', //Any string and argument (Argument in capital letters)
                        arguments: {
                        X: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: '5'
                        }
                    }
                }
            ],
        };
    }
    
    
        m(args) {
            document.addEventListener('keydown', (event) => {
                if (event.key === 'ArrowRight') {
                    this.vm.target.x = this.vm.target.x + args.X;
                    this.vm.target.setXY(this.vm.target.x, this.vm.target.y);
                }
                if (event.key === 'ArrowLeft') {
                    this.vm.target.x = this.vm.target.x - args.X;
                    this.vm.target.setXY(this.vm.target.x, this.vm.target.y);
                }
                if (event.key === 'ArrowDown') {
                    this.vm.target.y = this.vm.target.y - args.X;
                    this.vm.target.setXY(this.vm.target.x, this.vm.target.y);
                }
                if (event.key === 'ArrowUp') {
                    this.vm.target.y = this.vm.target.y + args.X;
                    this.vm.target.setXY(this.vm.target.x, this.vm.target.y);
                }
            });
        }
    }
    
    
    
    
    //Other statements go here
    
    Scratch.extensions.register(new move());
    })(Scratch);