var char   = require('chai');
var expect = char.expect;


describe('shuffle-arr: ', function () {

    var shuffle = require('../../index');

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

    it('shuffle() -> throws an Error', function () {
        expect(shuffle).to.throw(Error);
        expect(shuffle).to.throw(TypeError);
        expect(shuffle).to.throw(/should be an array or arrayLike/);
    });

    it('shuffle(null) -> throws an Error', function () {

        var fn = shuffle.bind(null)

        expect(fn).to.throw(Error);
        expect(fn).to.throw(TypeError);
        expect(fn).to.throw(/should be an array or arrayLike/);
    });

    it('shuffle(1) -> throws an Error', function () {
        var fn = shuffle.bind(1)

        expect(fn).to.throw(Error);
        expect(fn).to.throw(TypeError);
        expect(fn).to.throw(/should be an array or arrayLike/);
    });

    it('shuffle("abc") -> throws an Error', function () {
        var fn = shuffle.bind("abc")

        expect(fn).to.throw(Error);
        expect(fn).to.throw(TypeError);
        expect(fn).to.throw(/should be an array or arrayLike/);
    });

    it('shuffle({}) -> throws an Error', function () {
        var fn = shuffle.bind({})

        expect(fn).to.throw(Error);
        expect(fn).to.throw(TypeError);
        expect(fn).to.throw(/should be an array or arrayLike/);
    });

    it('shuffle(function () {}) -> throws an Error', function () {
        var fn = shuffle.bind(function () {})

        expect(fn).to.throw(Error);
        expect(fn).to.throw(TypeError);
        expect(fn).to.throw(/should be an array or arrayLike/);
    });
});
