var assert = require('assert');
var ObjectId = require('../mongo-randomid');
//var ObjectId = require('bson').ObjectId;

describe('mongo-randomid', function () {
  
  it('should generate random machine, pid, and index for mongo object id', function (done) {
    //return time4Bytes + machine3Bytes + pid2Bytes + index3Bytes;
    var oid = new ObjectId().toHexString();
    var cMid = oid.substr(8, 6);
    var cPid = oid.substr(14, 4);
        
    var id;
    for (var i = 0; i < 100; i++) {
      id = new ObjectId();
      var str = id.toHexString();
      var oMid = str.substr(8, 6);
      var oPid = str.substr(14, 4);
      assert.notEqual(oMid, cMid);
      assert.notEqual(oPid, cPid);
    }
    done();
  });
  
  it('should generate a valid time stamp', function (done) {
    var date1 = 0;
    var date2 = 1;
    while (date1 != date2) {
      // Get date1/date2 to make sure that we are in the same second 
      // when we compare
      var date1 = new Date().toString();
      var oid = new ObjectId();
      var date2 = new Date().toString();
    }

    assert.equal(date1, oid.getTimestamp().toString());
    done();
  });
  
});