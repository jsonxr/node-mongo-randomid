var ObjectID = require('bson').ObjectId;
var BinaryParser = require('bson').BinaryParser;

function random4Bytes() {
  return BinaryParser.encodeInt(
    parseInt(Math.random() * 0xFFFFFFFF, 10), // the random 4 bytes
    32, // 8 bits per byte = 32 bits
    false); // not signed
}

/**
* Generate a 12 byte id string used in ObjectID's
*
* @method
* @param {number} [time] optional parameter allowing to pass in a second based timestamp.
* @return {string} return the 12 byte id binary string.
*/
ObjectID.prototype.generate = function(time) {
  if ('number' != typeof time) {
    time = parseInt(Date.now()/1000,10);
  }
  
  var time4Bytes = BinaryParser.encodeInt(time, 32, true, true);
  
  return time4Bytes + random4Bytes() + random4Bytes();
};

module.exports = ObjectID;