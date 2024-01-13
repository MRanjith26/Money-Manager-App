// Write your code here
import './index.css'

const TransactionItem = props => {
  const {historyDetails, getActiveDeleteID} = props
  const {id, Title, Amount, Type} = historyDetails

  const onDelete = () => {
    getActiveDeleteID(id, Amount, Type)
  }

  return (
    <li className="History-Item">
      <p className="history-text">{Title}</p>
      <p className="history-text">Rs {Amount}</p>
      <p className="history-text">{Type}</p>
      <button
        className="delete-btn"
        data-testid="delete"
        type="button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default TransactionItem
