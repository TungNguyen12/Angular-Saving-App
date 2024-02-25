import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { TransactionComponent } from './transaction/transaction.component'
import { CommonModule } from '@angular/common'
import { Transaction } from './transaction/transaction.model'
import { BalanceComponent } from './balance/balance.component'
import { SavingComponent } from './saving/saving.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TransactionComponent,
    CommonModule,
    BalanceComponent,
    SavingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-saving-app'

  transactions: Transaction[] = []

  savingAmount: number = 0

  currentBalance: number = 0

  handleAddTransaction(t: Transaction) {
    if (t.type === 'Expense' && this.currentBalance < t.amount) {
      window.alert('Not enough to execute transaction')
    } else if (t.type === 'Income') {
      this.currentBalance += t.amount
    } else {
      this.currentBalance -= t.amount
    }
  }

  handleTransferToSaving(amount: number) {
    if (amount > this.currentBalance) {
      window.alert(`Not enough Balance to execute transaction`)
    } else if (this.currentBalance >= amount && amount > 0) {
      this.currentBalance -= amount
      this.savingAmount += amount
    }
    return this.currentBalance
  }

  handleTransferToBalance(amount: number) {
    console.log(`Amount: ${amount}, Saving Amount: ${this.savingAmount}`)
    if (amount > this.savingAmount) {
      console.log(`Not enough balance to execute transaction`)
      window.alert(`Not enough balance to execute transaction`)
    } else if (this.savingAmount >= amount && amount > 0) {
      this.currentBalance += amount
      this.savingAmount -= amount
    }
  }
}
