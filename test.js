const xrpl = require("xrpl");

async function main() {
    const net = "ws://127.0.0.1:6006";

    const client = new xrpl.Client(net);
    await client.connect();

    const faucetWallet = xrpl.Wallet.fromSecret("snoPBrXtMeMyMHUVTgbuqAfg1SUTb");

    console.log(`Faucet account:`);
    console.log(faucetWallet);
    console.log(faucetWallet.address);

    console.log(`Genesis balance: ${await client.getXrpBalance(faucetWallet.address)}`);

    await client.disconnect();
}

main()
    .catch(console.error);