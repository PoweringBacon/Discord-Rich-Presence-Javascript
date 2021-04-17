const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "detail message", // first text idk lol
        state: "state message", // the text on the bottom details text
        startTimestamp: new Date(), // time been playing
        largeImageKey: "large_image", // change the large_image in the "" to your large image picture name
        largeImageText: "large image text", // large image text when you hover over the large image
		smallImageKey: "small_image", // change the small_image in the "" to your small image picture name
        smallImageText: "small image text" // small image text when you hover over the small image
    });

    console.log("message"); // the message that prints in the console
});

rpc.login({
    clientId: "client id here" // client id
});
