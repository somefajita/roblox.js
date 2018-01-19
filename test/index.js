async function test() {
    require('../src/index').RobloxClient.getUsersFriendsByID(437887153).then(res => {
        console.log(res)
    })
}
test()