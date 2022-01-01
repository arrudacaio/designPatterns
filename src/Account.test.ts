import Account from "./Account"
import AccountBuilder from "./AccountBuilder"

test('Should create an account', () => {
  const account = new AccountBuilder('132.423.904-02')
    .setBank('033')
    .setBranch('0001')
    .setAccount('123456-1')
    .build()


  expect(account.getBalance()).toBe(0)
})


test('Should create an account and make a deposit', () => {
  const account = new AccountBuilder('132.423.904-02')
    .setBank('033')
    .setBranch('0001')
    .setAccount('123456-1')
    .build()


  account.credit(1000)
  expect(account.getBalance()).toBe(1000)
})

test('Should create an account and make a debit', () => {
  const account = new AccountBuilder('132.423.904-02')
    .setBank('033')
    .setBranch('0001')
    .setAccount('123456-1')
    .build()


  account.credit(1000)
  account.debit(500)
  expect(account.getBalance()).toBe(500)
})