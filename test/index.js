async function test() {
    require('../src/index').RobloxClient.getUsersFriendsByID(1).then(res => {
        console.log(res)
    })
}
test()
