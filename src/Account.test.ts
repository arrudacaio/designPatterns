import Account from "./Account"
import AccountBuilder from "./AccountBuilder"
import TransferService from "./TransferService"

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


test('Should create two accounts and make a transfer', () => {
  const accountFrom = new AccountBuilder('132.423.904-02')
    .setBank('033')
    .setBranch('0001')
    .setAccount('123456-1')
    .build()

  const accountTo = new AccountBuilder('764.233.111-53')
    .setBank('033')
    .setBranch('0042')
    .setAccount('124562-1')
    .build()


  accountFrom.credit(1000)
  accountTo.credit(500)
  const transferService = new TransferService()
  transferService.transfer(accountFrom, accountTo, 700)
  expect(accountFrom.getBalance()).toBe(300)
  expect(accountTo.getBalance()).toBe(1200)
})