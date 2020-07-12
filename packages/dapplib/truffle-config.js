require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remain unfold good knee front sense'; 
let testAccounts = [
"0x1dfbd436b304219460d444672c2634ab4c6bffee571bfdc2920444d141bb086f",
"0xca41f06a50cad40d6d930edbe61355b79bf2bd63fe3d4781b5f8fb7680ca1be8",
"0xf21fec23baa4059f5db60f87b9258008ea2973ee8a73d35a5c5b228f91bfbe27",
"0xb655ec7c10518ffac2bde600d3dbf849dafcfb8ca97da36c313c1f257e5aeb21",
"0x9b0a2bb9ce8b6633104174bd0a6ace3445def33a7288ef51ae1af6b012478f16",
"0xff90c9f46ee51fd0f0acb7b6a42265dea819c2ab0c7164b1b7c8f74be810c305",
"0x1bb3f6418a6e3a72405b1fe1e3e6c0d590e90f8e479ff59d6d6ab79ca198b51d",
"0xb8ffe3cd98dbef758c6281c5b8d87fd0544df0e185b660c9414116ed453a2bff",
"0x57af19f8608dea129659d7adac42ff58c0da3b389e4204a894ab5fbfa4fcf53d",
"0x4642ab7080017124f2db92f8635c6712e476d8e5d4fd18824af990d2df6403bc"
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
