exports.toMilliseconds = function(seconds, nanoseconds) {
  if (!seconds || !nanoseconds) throw new Error('Arguments should be passed');

  var milliseconds = (seconds * 1000) + (nanoseconds / 1000000);

  return parseInt(milliseconds);
};

exports.toSeconds = function(seconds, nanoseconds) {
  var milliseconds = this.toMilliseconds(seconds, nanoseconds);
  var seconds      = milliseconds / 1000;

  return seconds;
};

exports.toMinutes = function(seconds, nanoseconds) {
  var seconds = this.toSeconds(seconds, nanoseconds);
  var minutes = parseInt(seconds / 60);

  return minutes;
};

exports.benchmark = function(runningTime, options) {
  if (!options || !Object.keys(options).length) {
    var milliseconds = this.toMilliseconds(runningTime[0], runningTime[1]);
    return milliseconds;
  }

  if (options['in'] === 'seconds') {
    var seconds = this.toSeconds(runningTime[0], runningTime[1]);
    return seconds;
  }

  if (options['in'] === 'minutes') {
    var minutes = this.toMinutes(runningTime[0], runningTime[1]);
    return minutes;
  }
};
