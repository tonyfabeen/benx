var benx = require('../../index');

describe('toMilliseconds', function() {
  it('returns data in milliseconds', function() {
    var seconds = 7;
    var nanoseconds = 350164042;

    expect(benx.toMilliseconds(seconds, nanoseconds)).toEqual(7350);
  });
});
