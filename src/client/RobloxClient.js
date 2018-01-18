const rest = require('../rest/RESTManager');
const constants = require('../constants/Constants');

async function baseClient() {
    return [module.exports, rest, constants];
}

async function getUserByID(id) {
    if(!id) throw new Error('NO_ID_PROVIDED');
    return rest.getData(`/users/${id}`);
}

let roblox = baseClient;
roblox.getUserByID = getUserByID;

module.exports = roblox;