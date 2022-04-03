const Frajland = artifacts.require("Frajland");

module.exports = async function (deployer) {
  const name = "Frajland Buildings";
  const symbol = "FRJB";
  const cost = web3.utils.toWei("1", "ether");

  await deployer.deploy(Frajland, name, symbol, cost);
};
