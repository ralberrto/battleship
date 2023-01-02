const Ship = function(length) {
  let _length;

  if (length >= 2 && length <= 5) {
    _length = length;
  } else {
    throw RangeError('Ship\'s length should be between 2 and 5 (inclusive)');
  }

  const instance = {};

  Object.defineProperties(instance, {
    length: {
      get() {return _length},
    }
  });

  return instance;
}

module.exports = Ship;