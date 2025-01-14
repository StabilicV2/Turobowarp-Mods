(function(Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        throw new Error('Must run unsandboxed');
    }

    class isTrue {
        getInfo() {
            return {
                id: 'istrue',
                name: 'Is True',
                blocks: [
                    {
                        blockType: Scratch.BlockType.HAT,
                        opcode: "istrue",
                        text: "If [COND] is true",
                        isEdgeActivated: false,
                        arguments: {
                            COND: {
                                type: Scratch.ArgumentType.BOOLEAN,
                            }
                        }
                    }
                ]
            };
        }
        istrue(args) {
            yliufliuehlufhdelugekrheoulhgowg
        }