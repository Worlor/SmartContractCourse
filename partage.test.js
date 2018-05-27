const BigNumber = web3.BigNumber
const PartagesContract = artifacts.require('Partages')

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should()

contract('PartagesContract', function (walletAddresses) {
  let me = walletAddresses[0]
  let contract

  beforeEach(async function () {
    contract = await PartagesContract.new()
  })

  it('should create contract', async function () {
    contract.should.exist

    const Partages = await contract.getPartages(me)
    Partages.should.be.bignumber.equal(new BigNumber(0))
  })

  it('should addPartages and getPartages correctly', async function () {
    let Partages = await contract.getPartages(me)
    Partages.should.be.bignumber.equal(new BigNumber(0))

    await contract.addPartages(1, { from: me })

    Partages = await contract.getPartages(me)
    Partages.should.be.bignumber.equal(new BigNumber(1))
  })
})