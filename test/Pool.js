const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Pool', function () {
  let Pool, pool, owner, addr1, addr2
  const initalBalance = 0

  beforeEach(async () => {
    MPUNDIX = await ethers.getContractFactory('MPUNDIX')
    mPUNDIX = await MPUNDIX.deploy(1000000)

    MPURSE = await ethers.getContractFactory('MPURSE')
    mPURSE = await MPURSE.deploy(1000000)

    Pool = await ethers.getContractFactory('Pool')
    pool = await Pool.deploy(
      '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    )
    ;[owner, addr1, addr2, _] = await ethers.getSigners()
  })

  // need to find a way re-fund addr1 & addr2 with mPUNDIX & mPURSE

  // describe('Transactions', function () {
  //   it('Should update poolBalance when deposit', async function () {
  //     await pool
  //       .connect(addr1)
  //       .deposit(5, { value: ethers.utils.parseUnits('5', 'wei') })
  //     expect(await pool.poolBalance()).to.equal(5)
  //   })

  //   it('Should update poolBalance when withdraw', async function () {
  //     await pool.connect(addr1).withdraw(7)
  //     expect(await pool.poolBalance()).to.equal(7)
  //   })
  // })
})
