async function test() {
    require('../src/index').RobloxClient().then(res => {
        console.log(res)
    })
}
test()