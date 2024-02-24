import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-saving',
  standalone: true,
  imports: [],
  templateUrl: './saving.component.html',
  styleUrl: './saving.component.css',
})
export class SavingComponent {
  @Input() savingAmount: number = 0

  targetAmount: number = 0

  @Output() onTransferToBalance = new EventEmitter<number>()

  setTarget(amount: number): void {
    this.targetAmount = amount
  }

  transferToSaving(amount: number) {
    if (this.savingAmount > 0) {
      this.onTransferToBalance.emit(amount)
    }
  }
}
