#!/usr/bin/env node

var async = require('async');

var utils = require('../../utils');

var actions = utils.getActions();

module.exports = function(program) {
	program
		.command('role <roleInfo...>')
		.alias('r')
		.description('Gets one or more roles from the database. Role id or name is required.')
		.action(function(roleInfo) {
			actions.getRole(roleInfo);
		});

	return program;
}
