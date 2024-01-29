const { time, loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
//const { time, loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Lock", function () {
  async function deployOneYearLockFixture() {
    const [owner, acc1, acc2, acc3] = await ethers.getSigners();

    const Lock = await ethers.getContractFactory("Lock");
    const lock = await Lock.deploy();

    return { lock, owner, acc1, acc2, acc3 };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { lock } = await loadFixture(deployOneYearLockFixture);

      expect(await lock.unlockTime()).to.equal(unlockTime);
    });
  });
});
