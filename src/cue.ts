import log from "electron-log";

export interface Cue {
    tick: number;
    tickLength: number;
    pitch: number;
    velocity: number;
    gridOffset: GridOffset;
    handType: number;
    behavior: number;
}

export interface GridOffset {
    x: number;
    y: number;
}

interface OptionalCue {
    tick?: number;
    tickLength?: number;
    pitch?: number;
    velocity?: number;
    gridOffset?: GridOffset;
    handType?: number;
    behavior?: number;
}

export class Cue implements Cue {
    constructor(
        options: OptionalCue
    ) {
        this.tick = options.tick;
        this.tickLength = options.tickLength;
        this.pitch = options.pitch;
        this.velocity = options.velocity;
        this.gridOffset = options.gridOffset;
        this.handType = options.handType;
        this.behavior = options.behavior;
    }
}

/*
A factory for building Cue objects with chaining
*/
export class CueFactory {
    options: OptionalCue;

    constructor(options: OptionalCue = {}) {
        this.options = options;
    }

    tick(tick: number): CueFactory {
        return new CueFactory({
            ...this.options,
            tick,
        })
    }

    tickLength(tickLength: number): CueFactory {
        return new CueFactory({
            ...this.options,
            tickLength,
        })    
    }

    pitch(pitch: number): CueFactory {
        return new CueFactory({
            ...this.options,
            pitch,
        }) 
    }

    velocity(velocity: number): CueFactory {
        return new CueFactory({
            ...this.options,
            velocity,
        }) 
    }

    gridOffset(gridOffset: GridOffset): CueFactory {
        return new CueFactory({
            ...this.options,
            gridOffset,
        }) 
    }

    handType(handType: number): CueFactory {
        return new CueFactory({
            ...this.options,
            handType,
        }) 
    }

    behavior(behavior: number): CueFactory {
        return new CueFactory({
            ...this.options,
            behavior,
        }) 
    }

    build() {
        if (
            !Number.isInteger(this.options.tick)
            || !Number.isInteger(this.options.tickLength)
            || !Number.isInteger(this.options.pitch)
            || !Number.isInteger(this.options.velocity)
            || !Number.isInteger(this.options.handType)
            || !Number.isInteger(this.options.behavior)
            || !Number.isInteger(this.options.gridOffset.x)
            || !Number.isInteger(this.options.gridOffset.y)
        ) {
            throw Error(`Building Cue failed, one of its properties is not the proper type: {this.options}`);
        }
        return this.options;
    }

}