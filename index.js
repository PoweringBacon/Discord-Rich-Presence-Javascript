const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "idk",
        state: "AAAAAAA",
        startTimestamp: new Date(),
        largeImageKey: "sarv",
        largeImageText: "lol idk what am doing",
		smallImageKey: "chonk",
        smallImageText: "CHONK BOIIII"
    });

    console.log("sarv sezy");
});

rpc.login({
    clientId: "833081013982593024"
});