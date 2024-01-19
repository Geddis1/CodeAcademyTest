/* ------------------------------ TASK 10 ----------------------------------------------------------------
Sukurkite klasę "BankAccount" ir jos išvestines klases "SavingsAccount" ir "CheckingAccount" (naudokite ES6).

Klasė "BankAccount":
Savybės: accountNumber, ownerName, balance
Metodai: deposit(amount), withdraw(amount), getBalance()

Klasė "SavingsAccount" (išplėčia "BankAccount"):
Papildoma savybė: interestRate
Metodai: addInterest() - prideda palūkanas prie balanso pagal interestRate

Klasė "CheckingAccount" (išplėčia "BankAccount"):
Papildoma savybė: overdraftLimit
Metodai: withdraw(amount) - leidžia neigiamą balansą iki nurodyto overdraftLimit

------------------------------------------------------------------------------------ */
class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds.");
    }
  }

  getBalance() {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, ownerName, balance, interestRate) {
    super(accountNumber, ownerName, balance);
    this.interestRate = interestRate;
  }

  addInterest() {
    const interest = (this.balance * this.interestRate) / 100;
    this.balance += interest;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, ownerName, balance, overdraftLimit) {
    super(accountNumber, ownerName, balance);
    this.overdraftLimit = overdraftLimit;
  }

  withdraw(amount) {
    const potentialBalance = this.balance - amount;
    if (potentialBalance >= -this.overdraftLimit) {
      this.balance -= amount;
    } else {
      console.log("Exceeds overdraft limit.");
    }
  }
}

const savings = new SavingsAccount("12345", "John Doe", 1000, 5);
const checking = new CheckingAccount("67890", "Jane Smith", 500, 200);

savings.addInterest();
console.log(`${savings.ownerName}'s balance: $${savings.getBalance()}`); // Rezultatas: John Doe's balance: $1050

checking.withdraw(600);
console.log(`${checking.ownerName}'s balance: $${checking.getBalance()}`); // Rezultatas: Jane Smith's balance: $-100
