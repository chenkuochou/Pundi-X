const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('', function () {
  beforeEach(async () => {
    Victim = await ethers.getContractFactory('Victim')
    victim = await Victim.deploy()

    NormalContract = await ethers.getContractFactory('NormalContract')
    normalContract = await NormalContract.deploy()

    Attacker = await ethers.getContractFactory('Attacker')
    attacker = await Attacker.deploy(
      '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    )
  })

  describe('Interactions', function () {
    it('Calling from a normal contract', async function () {
      await normalContract.callingOutsideConstructor(
        '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      )
      const _isContract = await normalContract.isContract()
      console.log(
        'Does Victim treat NormalContract as a contract?',
        _isContract,
      )
      expect(_isContract).to.true
    })

    it('Calling from an attacker', async function () {
      const _isContract = await attacker.isContract()
      console.log('Does Victim treat Attacker as a contract?', _isContract)
      expect(_isContract).to.false
    })
  })
})
