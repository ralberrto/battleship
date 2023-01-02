const Ship = function(length) {
  let _length;
  let _hits = 0;

  if (length >= 2 && length <= 5) {
    _length = length;
  } else {
    throw RangeError('Ship\'s length should be between 2 and 5 (inclusive)');
  }

  const hit = function() {
    if (_hits === _length) throw RangeError('Ship cannot take more hits than its length');
    _hits++;
  }

  const isSunk = function() {
    if (_hits === _length) return true;
    return false;
  }

  const instance = {
    hit,
    isSunk,
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