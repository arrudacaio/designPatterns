export default class Account {
  bank: string
  branch: string
  account: string
  balance: number

  constructor(
    bank: string,
    branch: string,
    account: string
  ) {
    this.bank = bank
    this.branch = branch
    this.account = account
    this.balance = 0
  }

  credit(amount: number): void {
    this.balance += amount
  }


  getBalance(): number {
    return this.balance
  }



}