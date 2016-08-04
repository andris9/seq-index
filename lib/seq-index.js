'use strict';

const crypto = require('crypto');

class SeqIndex {

    constructor(id) {
        // instance ID
        this.id = Number(id) || 0;
        // how many ids have we created?
        this.index = 0;
        // ensure 4 char suffix for the generated id values
        this.suffix = (this.id && (this.id % 0x10000) || crypto.randomBytes(2).readUInt16LE(0)).toString(16);
        if (this.suffix.length < 4) {
            this.suffix = '0'.repeat(4 - this.suffix.length) + this.suffix;
        }
        // sub-millisecond sequence counter
        this.seqCounter = 0;
        // timestamp value to check if it's still the same millisecond
        this.timestamp = Date.now();
    }

    short() {
        let curtime = Date.now();
        // if time value has changed, reset sequence counter back to zero
        if (curtime !== this.timestamp) {
            this.timestamp = curtime;
            this.seqCounter = 0;
        }
        this.index++;
        let seq = this.seqCounter++;
        // convert id to hex
        return this.getByTime(curtime, seq);
    }

    get() {
        // return value with suffix
        return this.short() + this.suffix;
    }

    getByTime(time, seq) {
        seq = seq || 0;
        // generate new sequential ID
        let id = (time * 0x1000 + (seq % 0x1000));
        // convert id to hex
        return id.toString(16);
    }
}

module.exports = SeqIndex;
