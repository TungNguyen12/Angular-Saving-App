import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Transaction } from './transaction.model'

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
})
export class TransactionComponent {
  @Output() onTransactionAdded = new EventEmitter<Transaction>()

  @Input() transactionType!: 'Expense' | 'Income'

  addTransaction(amountInput: string, titleInput: string) {
    const newTransaction: Transaction = {
      amount: Number(amountInput),
      type: this.transactionType,
      title: titleInput,
    }
    this.onTransactionAdded.emit(newTransaction)
  }

  ngOnInit() {
    this.transactionType
  }
}
