import './index.css'
import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'

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
  state = {
    Balance: 0,
    Income: 0,
    Expenses: 0,
    historyList: [],
    Title: '',
    Amount: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  getActiveDeleteID = (id, Amount, Type) => {
    this.setState(prevState => ({
      historyList: prevState.historyList.filter(
        eachHistory => eachHistory.id !== id,
      ),
    }))

    if (Type === 'Expenses') {
      this.setState(prevState => ({
        Balance: prevState.Balance + parseInt(Amount),
      }))
      this.setState(prevState => ({
        Expenses: prevState.Expenses - Amount,
      }))
    } else if (Type === 'Income') {
      this.setState(prevState => ({
        Income: prevState.Income - Amount,
      }))
      this.setState(prevState => ({
        Balance: prevState.Balance - Amount,
      }))
    }
  }

  onAddHistoryDetails = event => {
    event.preventDefault()
    const {Title, Amount, optionId} = this.state

    const findType = transactionTypeOptions.filter(
      eachTransaction => eachTransaction.optionId === optionId,
    )

    const newHistory = {
      id: v4(),
      Title,
      Amount,
      Type: findType[0].displayText,
    }
    if (newHistory.Type === 'Income') {
      this.setState(prevState => ({
        Balance: prevState.Balance + parseInt(Amount),
      }))
      this.setState(prevState => ({
        Income: prevState.Income + parseInt(Amount),
      }))
    } else if (newHistory.Type === 'Expenses') {
      this.setState(prevState => ({
        Balance: prevState.Balance - parseInt(Amount),
      }))
      this.setState(prevState => ({
        Expenses: prevState.Expenses + parseInt(Amount),
      }))
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistory],
      Title: '',
      Amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onAddTitle = event => {
    this.setState({
      Title: event.target.value,
    })
  }

  onAddAmount = event => {
    this.setState({
      Amount: event.target.value,
    })
  }

  onAddType = event => {
    this.setState({
      optionId: event.target.value,
    })
  }

  render() {
    const {
      Balance,
      Income,
      Expenses,
      Title,
      Amount,
      optionId,
      historyList,
    } = this.state
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
              <form
                className="form-details"
                onSubmit={this.onAddHistoryDetails}
              >
                <h1 className="data-title">Add Transaction</h1>
                <label htmlFor="text">TITLE</label>
                <input
                  type="text"
                  id="text"
                  placeholder="TITLE"
                  className="form-input"
                  value={Title}
                  onChange={this.onAddTitle}
                />
                <label htmlFor="amount">AMOUNT</label>
                <input
                  type="text"
                  id="amount"
                  placeholder="AMOUNT"
                  className="form-input"
                  value={Amount}
                  onChange={this.onAddAmount}
                />
                <label htmlFor="value">TYPE</label>
                <select
                  name="type"
                  id="value"
                  className="form-input"
                  value={optionId}
                  onChange={this.onAddType}
                >
                  {transactionTypeOptions.map(eachType => (
                    <option
                      value={eachType.optionId}
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
                  {historyList.map(eachHistory => (
                    <TransactionItem
                      historyDetails={eachHistory}
                      key={eachHistory.id}
                      getActiveDeleteID={this.getActiveDeleteID}
                    />
                  ))}
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
