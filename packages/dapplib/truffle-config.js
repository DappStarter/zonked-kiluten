require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift remember pizza modify inner clock metal gas'; 
let testAccounts = [
"0xdeb16615d5952144837798810a212afe85fc7d7a15e6016831f522a6f80e1d57",
"0xbb9be1d40c3a6e5d323027b0f7e288a77b65bd72318cecb772c3efc9aa4d03c8",
"0x1d23a86c0323c1c2784dc1f4b4ffad56988937cb1f2c14c5e71c05f96a6e3bef",
"0x5c65b5ba85b91b287ca59cff35e9d639e8c00002744f42fce11c2221074bc706",
"0xd1b3dc952434e1f460a8e6b8068ffb68415dd413d9102552d38cb532705decb0",
"0xa0aeb51b70e05a0b6a8396b6de1217021bf4b977f74374d56b07ccd03f9db5f5",
"0xe2b99cd9f7528905b8445d530804ae646b68c0c58c5bcdc5c7444d15aa2ed4a1",
"0x29abdc3d931e3cc3b4e39ed405dd612ec8d2beb1d21a7bd40bd19837db9cb9a9",
"0xd85e48324a1368bf438d8ce4cea08621d888129bc18a5092d820de187874464d",
"0x6e19e3df56cbbccab4cd66238b5b54312fe93f9f7334b69d61b1095beb750ec2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
