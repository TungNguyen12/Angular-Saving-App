import { NgIf } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-saving',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './saving.component.html',
  styleUrl: './saving.component.css',
})
export class SavingComponent {
  @Input() savingAmount!: number

  targetAmount: number = 0

  @Output() onTransferToBalance = new EventEmitter<number>()

  setTarget(amount: number): void {
    this.targetAmount = amount
  }

  transferToBalance(amount: string) {
    if (this.savingAmount >= 0) {
      this.onTransferToBalance.emit(Number(amount))
    }
  }
}
