const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('', function () {
  it('Calling from different contracts', async function () {
    const Victim = await ethers.getContractFactory('Victim')
    victim = await Victim.deploy()

    const NormalContract = await ethers.getContractFactory('NormalContract')
    normalContract = await NormalContract.deploy()

    const Attacker = await ethers.getContractFactory('Attacker')
    attacker = await Attacker.deploy(
      '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    )

    const a = await normalContract.callingOutsideConstructor(
      '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    )
  })
})
