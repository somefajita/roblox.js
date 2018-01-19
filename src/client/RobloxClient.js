const rest = require('../rest/RESTManager');
const constants = require('../constants/Constants');

async function baseClient() {
    return Promise.resolve(this);
}

/*
 *
 * Gets a user by ID.
 * 
 */

async function getUserByID(id) {
    if(!id || isNaN(Number(id)) || id < 1 || id.toString().length > 10) throw new Error('INVALID_ID');
    return rest.getData(`/users/${id}`);
}

/*
 *
 * Gets a user by username.
 * 
 */

async function getUserByUsername(un) {
    if(!un) throw new Error('INVALID_USERNAME');
    return rest.getData(`/users/get-by-username`, ['username', un]);
}

let roblox = baseClient;
roblox.getUserByID = getUserByID;
roblox.getUserByUsername = getUserByUsername;

module.exports = roblox;