const PolyHiveToken = artifacts.require('HiveToken.sol');
const MasterChef = artifacts.require('MasterChef.sol');
module.exports = async function(deployer, _network, addresses) {
    const [admin, _] = addresses;

    await deployer.deploy(PolyHiveToken);
    const polyHiveToken = await PolyHiveToken.deployed();

    await deployer.deploy(
        MasterChef,
        polyHiveToken.address,
        admin,
        web3.utils.toWei('5'),
        1,
        10
    );
    const masterChef = await MasterChef.deployed();
    await polyHiveToken.transferOwnership(masterChef.address)
};
