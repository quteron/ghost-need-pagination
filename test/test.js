'use strict';

var expect = require('chai').expect;
var sinon = require('sinon');
var fn = require('../index');

describe('Custom handlebars helper to show ghost pagination if only it is needed', function() {
    var sandbox, options;

    beforeEach(function () {
        options = {
            fn: function () {},
            inverse: function () {}
        };

        sinon
            .stub(options, "fn")
            .returns(true);

        sinon
            .stub(options, "inverse")
            .returns(false);
    });

    it('should NOT return if 0 page', function() {
        var context = fn(0, options);
        expect(context).to.be.equal(false);
    });

    it('should NOT return if 1 page', function() {
        var context = fn(1, options);
        expect(context).to.be.equal(false);
    });

    it('should return if more than 1 page', function() {
        var context = fn(2, options);
        expect(context).to.be.equal(true);
    });
});