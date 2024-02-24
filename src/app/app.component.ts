import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { TransactionComponent } from './transaction/transaction.component'
import { FormsModule } from '@angular/forms'
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

  handleAddTransaction(transaction: Transaction) {
    this.transactions.push(transaction)
    console.log(this.transactions)
  }

  handleTransferToSaving(amount: number) {
    this.savingAmount = this.savingAmount + amount
    console.log(this.savingAmount)
  }

  handleTransferToBalance(amount: number) {
    this.currentBalance = this.currentBalance + amount
  }
}
