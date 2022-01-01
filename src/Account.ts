import AccountBuilder from "./AccountBuilder"

export default class Account {
  bank: string | undefined
  branch: string | undefined
  account: string | undefined
  balance: number
  document: string

  constructor(accountBuilder: AccountBuilder) {
    this.bank = accountBuilder.bank
    this.branch = accountBuilder.branch
    this.account = accountBuilder.account
    this.document = accountBuilder.document
    this.balance = 0

  }

  credit(amount: number): void {
    this.balance += amount
  }


  debit(amount: number): void {
    this.balance -= amount
  }


  getBalance(): number {
    return this.balance
  }



}