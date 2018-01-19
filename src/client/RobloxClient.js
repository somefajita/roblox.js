const rest = require('../rest/RESTManager');
const constants = require('../constants/Constants');

async function baseClient() {
    return Promise.resolve(this);
}

/*
 *
 * Gets Assets by ID
 * currently not working
 * 
 */

async function getAssetByID(assetId, placeId, pageNum) {
    if((!assetId || isNaN(Number(assetId)) || assetId < 1 || assetId.toString().length > 10) || (!placeId || isNaN(Number(placeId)) || placeId < 1 || placeId.toString().length > 10)) throw new Error('INVALID_ID');
    //assets are authenticated so needs token - not implemented yet
    if(!pageNum) return rest.getData(`/assets/${assetId}/versions`);
    return rest.getData(`/assets/${assetId}/versions`);
}

/*
 *
 * Gets a users clans by userId
 * 
 */

async function getClansByUserID(id) {
    if(!id || isNaN(Number(id)) || id < 1 || id.toString().length > 10) throw new Error('INVALID_ID');
    return rest.getData(`/clans/get-by-user`, ['userId', id]);
}

/*
 *
 * Gets a clan by ID
 * 
 */

async function getClanByID(id) {
    if(!id || isNaN(Number(id)) || id < 1 || id.toString().length > 15) throw new Error('INVALID_ID');
    return rest.getData(`/clans/get-by-id`, ['clanId', id]);
}

/*
 *
 * Gets the platform currency budget
 * in all honesty the docs dont have anything about this so i have no clue
 * also seems to need auth so not implemented yet
 * 
 */

async function getPlatformCurrencyBudget() {
    return rest.getData(`/my/platform-currency-budget`);
}

/*
 *
 * Gets a users friends by ID
 * 
 */

async function getUsersFriendsByID(id) {
    if(!id || isNaN(Number(id)) || id < 1 || id.toString().length > 10) throw new Error('INVALID_ID');
    return rest.getData(`/users/${id}/friends`);
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
roblox.getClansByUserID = getClansByUserID;
roblox.getUsersFriendsByID = getUsersFriendsByID;

module.exports = roblox;