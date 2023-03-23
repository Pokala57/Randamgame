import './index.css'

const Item = props => {
  const {itemDetails, itemdel} = props
  const {id, text} = itemDetails

  const delItem = () => {
    itemdel(id)
  }

  return (
    <li>
      {text}
      <button type="button" className="butdel" onClick={delItem}>
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default Item
