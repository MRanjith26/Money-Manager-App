import './index.css'
import {Component} from 'react'
import MoneyDetails from '../MoneyDetails/index'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {Balance: 0, Income: 0, Expenses: 0}

  render() {
    const {Balance, Income, Expenses} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <div className="top-container">
            <div className="details-container">
              <h1 className="top-heading">Hi, Richard</h1>
              <p className="para">
                Welcome back to your
                <span className="graph"> Money Manager</span>
              </p>
            </div>
          </div>
          <MoneyDetails
            TBalance={Balance}
            TIncome={Income}
            TExpenses={Expenses}
          />
          <div className="data-container">
            <div className="form-container">
              <form className="form-details">
                <h1 className="data-title">Add Transaction</h1>
                <label htmlFor="text">TITLE</label>
                <input
                  type="text"
                  id="text"
                  placeholder="TITLE"
                  className="form-input"
                />
                <label htmlFor="amount">AMOUNT</label>
                <input
                  type="text"
                  id="amount"
                  placeholder="AMOUNT"
                  className="form-input"
                />
                <label htmlFor="value">TYPE</label>
                <select name="type" id="value" className="form-input">
                  {transactionTypeOptions.map(eachType => (
                    <option
                      value={eachType.displayText}
                      className="option-value"
                      key={eachType.optionId}
                    >
                      {eachType.displayText}
                    </option>
                  ))}
                </select>
                <button className="form-btn" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="history-container">
              <div className="history-details">
                <h1 className="data-title">History</h1>
                <ul className="history-cards">
                  <div className="history">
                    <p className="history-title">Title</p>
                    <p className="history-title">Amount</p>
                    <p className="history-title">Type</p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
