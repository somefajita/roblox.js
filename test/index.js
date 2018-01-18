async function test() {
    let api = await require('../src/index').RobloxClient();
    console.log(api);
}
test()