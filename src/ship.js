const Ship = function(length) {
  instance = {};

  Object.defineProperties(instance, {
    length: {
      get() {return _length},
      set(value) {
        if (value >= 2 && value <= 5) {
          _length = value;
        } else {
          throw RangeError('Ship\'s length should be between 2 and 5 (inclusive)');
        }
      }
    }
  });

  instance.length = length;

  return instance;
}

module.exports = Ship;