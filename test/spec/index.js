'use strict';

var expect = require('chai').expect;


describe('shuffle-arr: ', function () {

  var shuffle = require('../../');

  it('shuffle([1, 2, 4])', function () {

    var arr = [1, 2, 4];
    var ret = shuffle(arr);

    expect(ret).to.equal(arr);
    expect(ret).to.eql(arr);
  });

  it('shuffle([1, 2, 4], {copy: true})', function () {

    var arr = [1, 2, 4];
    var ret = shuffle(arr, { copy: true });

    expect(ret).to.not.equal(arr);
  });

  it('shuffle array like object', function () {

    function worker() {

      var length = arguments.length;
      var raw    = [].slice.call(arguments);
      expect(shuffle(arguments).length).to.equal(length);
      expect(shuffle(arguments)).to.include.members(raw);
    }

    worker();
    worker(1);
    worker(1, 2);
    worker(1, 2, 3);
  });

  it('shuffle("abcdefg")', function () {
    expect(shuffle('abcdefg')).to.have.length(7);
  });

  it('others', function () {
    expect(shuffle()).to.be.undefined;
    expect(shuffle(null)).to.be.null;
    expect(shuffle(1)).to.be.equal(1);
    expect(shuffle({ foo: 'bar' })).to.be.eql({ foo: 'bar' });
  });
});
