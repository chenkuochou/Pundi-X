const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Pool', function () {
  let Pool, pool, owner, addr1, addr2
  const initalBalance = 0

  beforeEach(async () => {
    MPUNDIX = await ethers.getContractFactory('MPUNDIX')
    mPUNDIX = await MPUNDIX.deploy(1000000)

    Pool = await ethers.getContractFactory('MPURSE')
    pool = await Pool.deploy(1000000)

    Token = await ethers.getContractFactory('Pool')
    token = await Token.deploy(
      '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
      '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
    )
    ;[owner, addr1, addr2, _] = await ethers.getSigners()
  })

  describe('Deployment', function () {
    it('Should set the right inital balance', async function () {
      expect(await pool.getContractBalance()).to.equal(initalBalance)
    })
  })
})
