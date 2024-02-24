import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css',
})
export class BalanceComponent {
  @Input() currentBalance: number = 0

  @Output() onTransferToSaving = new EventEmitter<number>()

  transferToSavings(amount: number) {
    if (this.currentBalance >= 0) {
      this.onTransferToSaving.emit(amount)
    }
  }
}
