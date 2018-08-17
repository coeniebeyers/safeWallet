const IdentityContractAbstraction = artifacts.require('IdentityContract');
let instance;

contract('IdentityContract', (accounts) => {
  beforeEach(async () => {
    instance = await IdentityContractAbstraction.new({from: accounts[0]});
  });

  it('should be able to add a customer', async () => {
    const txHash = await instance.addCustomer(accounts[1])
    const result = await instance.customers(accounts[1])
    assert.strictEqual(result.toNumber(), 1)
    


    //assert.strictEqual(balance.toNumber(), 10000);
  });

});
