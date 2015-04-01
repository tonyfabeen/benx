var benx = require('../../index');

describe('#toMilliseconds', function() {

  describe('when it does not receive arguments', function() {
    it('throws exception', function() {
      expect(benx.toMilliseconds).toThrow(new Error('Arguments should be passed'));
    });
  });

  describe('on success', function() {
    it('returns data in milliseconds', function() {
      var seconds = 7;
      var nanoseconds = 350164042;

      expect(benx.toMilliseconds(seconds, nanoseconds)).toEqual(7350);
    });
  });
});
