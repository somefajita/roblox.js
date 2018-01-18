const snekfetch = require('snekfetch');
const constants = require('../constants/Constants')


/*
 *
 * Tests the connection to the API, should return 403 Forbidden
 * Because Roblox.
 * 
 */

async function testAPIStatus() {
    let res = await snekfetch.get(constants.APILocation);
    return res.text;
}

/*
 *
 * Should not ever be used as incomplete and likely won't ever be finished.
 * 
 */

async function getRobloxEndpoint(ep, method, sendData) {
    return snekfetch[method](`${constants.APILocation}${(ep ? ep : constants.defaultEndpoint)}`).send(sendData);
}

/*
 *
 * **Gets** a specified endpoint.
 * 
 */

async function getData(ep) {
    let res = await snekfetch.get(`${constants.APILocation}${(ep ? ep : constants.defaultEndpoint)}`);
    return res.text;
}

rest = testAPIStatus;
rest.getRobloxEndpoint = getRobloxEndpoint;
rest.getData = getData;

module.exports = rest;