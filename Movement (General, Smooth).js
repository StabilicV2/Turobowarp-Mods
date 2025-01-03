(function(Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        throw new Error('Must run unsandboxed');
    }

    class move {
        constructor() {
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
                id: 'move',
                name: 'Movement',
                blocks: [
                    {
                        opcode: 'm',
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
            };
        }

        m(args) {
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

    // Register the extension
    Scratch.extensions.register(new move());
})(Scratch);
