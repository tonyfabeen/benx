exports.toMilliseconds = function(seconds, nanoseconds) {
  if (!seconds || !nanoseconds) new Error('Arguments should be passed');

  var milliseconds = (seconds * 1000) + (nanoseconds / 1000000);

  return parseInt(milliseconds);
}
