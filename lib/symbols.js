"use strict";

var _ = require('lodash');

/**
 * Return the structure of a parsed file
 * @param  {Array} symbols  array of symbols
 * @param  {String} file    filename
 * @return {Array}
 */
function structure(symbols, file) {
	return _.compact(symbols.map(function (method) {
		if (!method.ctx || !method.ctx.string) {
			return null;
		}
		return {
			targetFile: file,
			//name:method.ctx.name,
			name: method.ctx.string,
			type: method.ctx.type,
			nameOld: method.ctx.name,
			receiver: method.ctx.receiver
		};
	})) || [];
}

/**
 * Exports
 *
 * @ignore
 */
module.exports = structure;