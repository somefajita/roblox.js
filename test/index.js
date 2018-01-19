async function test() {
    require('../src/index').RobloxClient.getUserByUsername('roblox').then(res => {
        console.log(res)
    })
}
test()