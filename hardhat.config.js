const fs = require('fs')
const privateKey = fs.readFileSync('.env', 'utf8')

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

// TODO: use the url in Infura or Alchemy.
module.exports = {
    defaultNetwork: "goerli",
    networks: {
      mainnet: {
        chainId: 1,
        url: 'https://alchemy.com/v2/aa-aasss',
        accounts: [privateKey]
      },
      goerli: {
        chainId: 5,
        url: 'https://alchemy.com/v2/aa-aasss',
        accounts: [privateKey]
      }
    },
    solidity: {
      compilers: [
        { 
          version: "0.8.17",
          settings: {
            optimizer: {
              enabled: true,
              runs: 200,
            },
          }
        }
      ]
    }
}
