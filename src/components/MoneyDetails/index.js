// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {TBalance, TIncome, TExpenses} = props

  return (
    <div className="count-container">
      <div className="card balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icon"
        />
        <div className="details">
          <p className="count-heading">Your Balance</p>
          <p className="count" data-testid="balanceAmount">
            Rs {TBalance}
          </p>
        </div>
      </div>
      <div className="card income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="icon"
        />
        <div className="details">
          <p className="count-heading">Your Income</p>
          <p className="count" data-testid="incomeAmount">
            Rs {TIncome}
          </p>
        </div>
      </div>
      <div className="card expense">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon"
        />
        <div className="details">
          <p className="count-heading">Your Expenses</p>
          <p className="count" data-testid="expensesAmount">
            Rs {TExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
