class Account {
  constructor(accNum, holderName) {
    this.accountNumber = accNum;
    this.holderName = holderName;
    this.balance = 0;
  }
  withdraw(amount) {
    if (this.balance - amount >= 0) {
      this.balance -= amount;
    }
    return this.balance;
  }
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }
}

class Saving extends Account {
  constructor(accNum, holderName, rate) {
    super(accNum, holderName);
    this.interestRate = rate;
  }
}

class Current extends Account {
  constructor(accNum, holderName, limit) {
    super(accNum, holderName);
    this.overdraftLimit = limit;
  }
  withdraw(amount) {
    if (this.balance - amount >= 0) {
      return super.withdraw(amount);
    } else if (-(this.balance - amount) <= this.overdraftLimit) {
      this.balance -= amount;
    }
    return this.balance;
  }
}

module.exports = { Account, Saving, Current };
