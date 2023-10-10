import { time, loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Lock", function () {
  async function deployContractNameFixture() {
    const [owner, acc1, acc2, acc3] = await ethers.getSigners();

    const Contract = await ethers.getContractFactory("ContractName");
    const contract = await Contract.deploy();

    return { contract, owner, acc1, acc2, acc3 };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { contract } = await loadFixture(deployContractNameFixture);

      expect(await contract.unlockTime()).to.equal(0);
    });
  });
});
