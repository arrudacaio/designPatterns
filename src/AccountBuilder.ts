import Account from "./Account"

export default class AccountBuilder {
  bank: string | undefined
  branch: string | undefined
  account: string | undefined
  document: string

  // Para criar conta no banco, voce PRECISA ter documento.
  constructor(document: string) {
    this.document = document
  }

  setBank(bank: string) {
    this.bank = bank
    return this
  }

  setBranch(branch: string) {
    this.branch = branch
    return this
  }

  setAccount(account: string) {
    this.account = account
    return this
  }

  build() {
    const account = new Account(this)
    return account
  }
}