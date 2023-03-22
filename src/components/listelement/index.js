const Item = props => {
  const {itemDetails, itemdel} = props
  const {id, text} = itemDetails

  const delItem = () => {
    itemdel(id)
  }

  return (
    <li>
      {text}
      <button type="button" onClick={delItem}>
        D
      </button>
    </li>
  )
}

export default Item
