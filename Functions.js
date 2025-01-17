//! This file cannot be used within turbowarp yet, but is kept for simple references and acts as a library
//! for all the contents within the Utilities file

export function powers(args) { //* Powers function
    return Math.pow(args.BASE, args.EXPONENT);
}

export function ascii(args) { //* ASCII function
    const array = [];
    for (let i = 0; i < args.TEXT.length; i++) {
        array[i] = args.TEXT.charCodeAt(i);
}
return array;
}

export function round(args) { //* Rounding function
    let RoundedValue = Math.round(args.INPUT * Math.pow(10, args.PRECISION)) / Math.pow(10, args.PRECISION);
    return RoundedValue
}

export function encode(args) { //* Encode function
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

export function decode(args) { //* Decode function
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

export class movement { //* Movement class
    constructor(args) {
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