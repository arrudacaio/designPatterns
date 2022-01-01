import Account from "./Account"

test('Should create an account', () => {
  const account = new Account('022', '0001', '98570-4')
  account.credit(1000)
  expect(account.getBalance()).toBe(1000)
})