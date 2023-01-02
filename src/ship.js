const Ship = function(length) {
  let _length;
  let _hits = 0;

  if (length >= 2 && length <= 5) {
    _length = length;
  } else {
    throw RangeError('Ship\'s length should be between 2 and 5 (inclusive)');
  }

  const hit = function() {
    _hits++;
  }

  const instance = {
    hit,
  };

  Object.defineProperties(instance, {
    length: {
      get() {return _length},
    },
    hits: {
      get() {return _hits},
    },
  });

  return instance;
}

module.exports = Ship;