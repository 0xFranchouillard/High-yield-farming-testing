const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
const privateKeys = fs.readFileSync(".secret").toString().trim();

module.exports = {
  solc: {
    version: "^0.6.2",
    docker: false,
    parser: "solcjs",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10
      },
      evmVersion: "istanbul"
    },
    networks: {
      development: {
        host: "127.0.0.1",     // Localhost (default: none)
        port: 8545,            // Standard Ethereum port (default: none)
        network_id: "*",       // Any network (default: none)
      },
      matic: {
        provider: () => new HDWalletProvider(privateKeys, `https://rpc-mumbai.matic.today`),
        network_id: 80001,
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: true
      },
    },
  }
}