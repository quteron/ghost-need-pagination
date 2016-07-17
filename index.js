'use strict';

/**
 * Displays pagination if only it's needed.
 * @param {number} count page count
 * @param {object} options hash contains a property named fn to invoke a normal Handlebars template
 * @return {string}
 */
function fn(count, options) {
    var pages = Number(count);
    return pages > 1 ? options.fn(this) : options.inverse(this);
}

module.exports = fn;