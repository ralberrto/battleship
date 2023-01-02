const Ship = function(length) {
  let _length = length;

  instance = {};

  Object.defineProperties(instance, {
    length: {
      get() {return _length},
      set(value) {
        if (value >= 2 && value <= 5) {
          _length = value;
        } else {
          throw new Error('Ship\'s length should be between 2 and 5 (inclusive).')
        }
      }
    }
  });

  return instance;
}

module.exports = Ship;