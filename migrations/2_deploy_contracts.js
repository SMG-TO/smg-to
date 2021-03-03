const SMGToken = artifacts.require("SMGToken");

module.exports = function (deployer) {
  deployer.deploy(SMGToken);
};
