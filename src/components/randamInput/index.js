import {Component} from 'react'
import Item from '../listelement/index'
import './index.css'

class UserInput extends Component {
  state = {
    desi: '',
    erromsg: '',
    inputlist: [],
    inputcount: 0,
  }

  onChangeinput = e => {
    this.setState({desi: e.target.value})
  }

  addlist = () => {
    const {desi} = this.state

    if (desi === '') {
      this.setState({erromsg: 'write any one'})
    } else {
      this.setState(prevState => ({
        inputlist: [
          ...prevState.inputlist,
          {id: prevState.inputcount, text: desi},
        ],
        inputcount: prevState.inputcount + 1,
        desi: '',
      }))
    }
  }

  itemdel = id => {
    const {inputlist} = this.state
    this.setState({inputlist: inputlist.filter(eachItem => eachItem.id !== id)})
  }

  addinputto = () => {
    const {inputlist} = this.state
    const localdetails = localStorage.getItem('desition_list')
    if (localdetails === null) {
      localStorage.setItem('desition_list', JSON.stringify(inputlist))
    } else {
      localStorage.removeItem('desition_list')
      localStorage.setItem('desition_list', JSON.stringify(inputlist))
    }
  }

  render() {
    const {desi, erromsg, inputlist} = this.state

    return (
      <div>
        <div className="todos-bg-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="todos-heading">Enter your decisions</h1>
                <h1 className="create-task-heading">
                  Create
                  <span className="create-task-heading-subpart">Task</span>
                </h1>
                <input
                  type="text"
                  id="todoUserInput"
                  className="todo-user-input"
                  placeholder="What needs to be done?"
                  onChange={this.onChangeinput}
                  value={desi}
                />
                <p>{erromsg}</p>
                <button
                  type="button"
                  onClick={this.addlist}
                  className="button"
                  id="addTodoButton"
                >
                  Add
                </button>
                <h1 className="todo-items-heading">
                  My <span className="todo-items-heading-subpart">Tasks</span>
                </h1>
                <ul className="todo-items-container" id="todoItemsContainer">
                  {inputlist.map(each => (
                    <Item
                      key={each.id}
                      itemDetails={each}
                      itemdel={this.itemdel}
                    />
                  ))}
                </ul>
                <button
                  type="button"
                  className="button"
                  onClick={this.addinputto}
                  id="saveTodoButton"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserInput
