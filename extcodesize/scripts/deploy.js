const hre = require('hardhat')

async function main() {
  const [deployer] = await hre.ethers.getSigners()

  console.log('Deploying contracts with the account:', deployer.address)

  const Victim = await hre.ethers.getContractFactory('Victim')
  const victim = await Victim.deploy()
  await victim.deployed()

  const NormalContract = await hre.ethers.getContractFactory('NormalContract')
  const normalContract = await NormalContract.deploy()
  await normalContract.deployed()

  const Attacker = await hre.ethers.getContractFactory('Attacker')
  const attacker = await Attacker.deploy(victim.address)
  await attacker.deployed()

  console.log('Victim deployed to:', victim.address)
  console.log('NormalContract deployed to:', normalContract.address)
  console.log('Attacker deployed to:', attacker.address)

  //console.log('Call ')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
