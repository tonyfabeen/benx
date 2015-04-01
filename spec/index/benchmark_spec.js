var benx = require('../../index');

describe('#benchmark', function() {
  var runningTime = [7, 350164042];

  describe('without options', function() {
    it('returns the running time in milliseconds', function() {
      expect(benx.benchmark(runningTime)).toEqual(7350);
    });
  })

  describe('with options', function() {
    describe('in seconds', function() {
      it('returns the running time in seconds', function() {
        expect(benx.benchmark(runningTime, { in: 'seconds'})).toEqual(7.35);
      });
    });

    describe('in minutes', function() {
      describe('when less than a minute', function() {
        it('returns zero', function() {
         expect(benx.benchmark(runningTime, { in: 'minutes'})).toEqual(0);
        });
      });

      describe('when more than a minute', function() {
        var runningTime = [120, 45202025];

        it('returns running time in minutes', function() {
          expect(benx.benchmark(runningTime, { in: 'minutes'})).toEqual(2);
        });
      });
    })
  });
});
