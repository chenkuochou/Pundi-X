const hre = require('hardhat')

async function main() {
  const [deployer] = await hre.ethers.getSigners()

  console.log('Deploying contracts with the account:', deployer.address)

  const MPUNDIX = await hre.ethers.getContractFactory('MPUNDIX')
  const mPUNDIX = await MPUNDIX.deploy(1000000)
  await mPUNDIX.deployed()

  const MPURSE = await hre.ethers.getContractFactory('MPURSE')
  const mPURSE = await MPURSE.deploy(1000000)
  await mPURSE.deployed()

  const Pool = await hre.ethers.getContractFactory('Pool')
  const pool = await Pool.deploy(mPUNDIX.address, mPURSE.address)
  await pool.deployed()

  console.log('mPUNDIX deployed to:', mPUNDIX.address)
  console.log('mPUNRSE deployed to:', mPURSE.address)
  console.log('Pool deployed to:', pool.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
