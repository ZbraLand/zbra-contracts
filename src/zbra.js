const { ethers } = require("hardhat");

async function main() {
    /*
     *  Step1: Loading Network, Developer Account
     */
    const networkObj = await ethers.provider.getNetwork();
    let network = 'hardhat'
    if (networkObj.chainId.toString() === '1') {
      network = 'mainnet';
    } else if (networkObj.chainId.toString() === '5') {
      network = 'goerli';
    } else {
      console.log("Unsupported network")
      return 
    }
    console.log(`Loaded network  ${network} `);

    let signer
    [signer] = await ethers.getSigners();
    console.log(`Loaded account ${signer.address} `)


    /*
     *  Step2: Load Contracts
     */
    const configData = require(`../deployed/contracts.${network}.json`);
    const ControllerAddress = configData.ControllerAddress;
    const ControllerAbi = require(`../abis/IZbraController.json`).abi;
    this.contractController = new ethers.Contract(ControllerAddress, ControllerAbi, signer);

    /*
     *  Step3: Get register price for a name for 3 years
     *    (a) domainName set as "666", without the dot suffix
     *    (a) grabPriceFrom takes `owner` adddress, to whom the domain will be purchased
     */
    const durationInYears = 3;
    const randomNum = Math.floor(Math.random() * 100000 + 100);
    const domainName = randomNum.toString();
    const price0 = await this.contractController.grabPriceFrom(domainName, durationInYears, signer.address);


    // struct Price {
    //     uint256 cost; // cost to pay to perform the action
    //     uint256 value; // intrinsic domain value per year 
    //     uint256 durationInYears;
    //     uint256 grabRefund;
    // }
    const cost0 = ethers.BigNumber.from(price0[0]);
    console.log(`Domain Name ${domainName}.zbra costs: ${ethers.utils.formatEther(cost0)} ETH`)

    /*
     *  Step4: Register the name for 3 years
     *    (a) set referrer if you are from referral link - should be different from the signer address.
     *    (b) if you send more than the cost, you will get refunded for both EOA and contracts account.
     */
    const referrer = "0x0000000000000000000000000000000000000000";
    const tx = await this.contractController.register(domainName, signer.address, referrer, durationInYears, {
      value: cost0
    });
    console.log(`Register TxHash: ${tx.hash}`);
    await tx.wait();

    const price1 = await this.contractController.grabPriceFrom(domainName, durationInYears, referrer);
    const cost1 = ethers.BigNumber.from(price1[0]);
    console.log(`Domain Name ${domainName}.zbra new costs: ${ethers.utils.formatEther(cost1)} ETH`)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
