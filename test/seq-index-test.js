'use strict';

const SeqIndex = require('../lib/seq-index');

module.exports['Generate unique sequential IDs'] = test => {
    let s = new SeqIndex(Date.now());
    let last = s.get();

    for (let i = 0; i < 100000; i++) {
        let next = s.get();
        test.equal(next.localeCompare(last), 1, 'Generated index must be higher than previous value');
        last = next;
    }

    test.done();
};

module.exports['Generate specific ID'] = test => {
    let time = 1470300906242;
    let seq = 100;
    let s = new SeqIndex();
    let last = s.getByTime(time, seq);

    for (let i = 0; i < 100; i++) {
        let next = s.getByTime(time, seq);
        test.equal(next.localeCompare(last), 0, 'Generated index must be higher than previous value');
        last = next;
    }

    test.done();
};
