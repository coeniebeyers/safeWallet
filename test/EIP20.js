const IdentityContractAbstraction = artifacts.require('IdentityContract');
const EIP20Abstraction = artifacts.require('EIP20');
let identityContractInstance;
let EIP20Instance;

contract('EIP20', (accounts) => {
  beforeEach(async () => {
    identityContractInstance = await IdentityContractAbstraction.new({from: accounts[0]});
    EIP20Instance = await EIP20Abstraction.new(identityContractInstance.address, 1000, "Blue Token", 2, "BTX", {from: accounts[0]});
  });

  it('should allow an authorised customer to do a transfer', async () => {
    const txHash1 = await identityContractInstance.addCustomer(accounts[0])
    const txHash2 = await EIP20Instance.transfer(accounts[1], 1, {from: accounts[0]})
    const balance = await EIP20Instance.balances(accounts[0])
    assert.strictEqual(balance.toNumber(), 999)
  });

});
