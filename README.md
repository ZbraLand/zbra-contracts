# Zbra Contracts
<img src="https://user-images.githubusercontent.com/116644432/200467196-d6a03660-2c7d-46a3-b792-79efb0ea5587.png" alt="Zbra Land" style="width: 80px;">

🌿 An open source interface for the Zbra

Zbra is a name service with a magic in-protocol pricing mechanism that provides high liquidity and benefits both early birds and residents moving in in 2050. Grab .zbra domains and get profit!

- Website: [zbra.land](https://zbra.land/)
- Whitepaper: [English](https://mirror.xyz/zbraland.eth)
- Twitter: [@ZebraDomains](https://twitter.com/ZebraDomains)
- Discord: [Zbra](https://discord.gg/U2taE4Nh)
- Telegram: [Zbra](https://t.me/+3BxK4te9sSljM2Ex)
- Github: [Zbra](https://github.com/ZbraLand)


## Interact with the Contracts

1. Environment Setup

(a) install the nodejs dependencies
```
npm install
```

(b) setup the account with private key. Keep it safe.
create a file named .env, and copy the privatekey in the .env file.

(c) setup a web3 provider. Use Infura or Alchemy for free. e.g. https://infura.io/
update the host url in hardhat.config.js

2. Run the script 

```
npm run goerli
```

By default is the goerli network. 
For the mainnet, call "npm run mainnet"

3. The Logs will be showed as follows:

$ hardhat run --network goerli src/zbra.js
Loaded network  goerli 
Loaded account 0x3bf7307C6f3a42d33C79ED527B76aFdc6B1A4920
Domain Name 15913.zbra costs: 0.006 ETH
Register TxHash: 0x8ccd13a8bef71f96c42134e65b717fea3a8595a78c27cf3d54e2c366cbac421f
Domain Name 15913.zbra new costs: 0.009 ETH
✨  Done in 28.55s.