export interface Transaction {
  amount: number
  type: 'Expense' | 'Income'
  title: string
}
