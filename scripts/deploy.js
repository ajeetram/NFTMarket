
const hre = require("hardhat");

async function main() {
 

  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nft = await Lock.deploy();

  await nft.deployed();

  console.log(
    `contract address : ${nft.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
