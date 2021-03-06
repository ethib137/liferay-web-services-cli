#!/usr/bin/env node

var _ = require('lodash');
var async = require('async');

var utils = require('../../utils');

var actions = utils.getActions();

module.exports = function(program) {
	program
		.command('organization [quantity]')
		.alias('o')
		.option('-p, --parentOrganizationId <integer>', 'The parent organization ID to add the organization to. Defaults to 0.', Number, 0)
		.description('Adds one or more organizations to the database.')
		.action(function(number) {
			number = !_.isNaN(Number(number)) ? Number(number) : 1;
			actions.addOrganization(number, this.parentOrganizationId, function(error, results) {
				for (var i = 0, length = results.length; i < length; i++) {
					console.log('');
					console.log('New Organization:');
					utils.printJSON(JSON.parse(results[i]));
					console.log('');
				}

				console.log('Successfully added', + results.length + ' new organizations.');
			});
		});

	return program;
}
