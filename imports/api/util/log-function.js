import { Meteor } from 'meteor/meteor';

export const Log = {
	/**
	 * Output log for client
	 * @param {string} message
	 * @param {string} level (optional)
	 */
	forClient: function (message, level = null) {
		if (Meteor.isClient) {
			if (arguments.length == 1) {
				console.log(message);
			}
			else {
				console.log('[' + level.toUpperCase() + ']\t' + message);
			}
		}
	},

	/**
	 * Output log for server
	 * @param {string} message
	 * @param {string} level (optional)
	 */
	forServer: function (message, level = null) {
		if (Meteor.isServer) {
			if (arguments.length == 1) {

				console.log(message);
			}
			else {
				str = '[' + level.toUpperCase() + ']\t' + message + ' ';
				console.log(('[' + level.toUpperCase() + ']\t' + message));
			}
		}
	},

	/**
	 * Output log for server and client
	 * @param {string} message
	 * @param {string} level (optional)
	 */
	out: function (message, level = null) {
		if (arguments.length == 1) {
			this.forClient(message);
			this.forServer(message);
		} else {
			this.forClient(message, level);
			this.forServer(message, level);
		}
	}
};
