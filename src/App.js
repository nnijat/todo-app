import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';


class App extends Component {
  state = {
    list: [
      {
        text: "Learn React",
        isClicked: false
      },
      {
        text: "Finish HW",
        isClicked: false
      }
    ],
    input: "",
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value })
  }

  addTodo = () => {
    const newListItem = {
      text: this.state.input,
      isClicked: false
    }
    const newList = [...this.state.list, newListItem]
    this.setState({ list: newList })
    this.setState({ input: "" })
  }

  deleteToDo = (index) => {
    const newList = [... this.state.list];
    newList.splice(index, 1);
    this.setState({ list: newList });
  }

  markComplete = (index) => {
    this.setState({
      list: this.state.list.map(item => {
        console.log(index)
        console.log(item)
        if (item === this.state.list[index]) {
          item.isClicked = !item.isClicked
        }
        return item
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Todo List</h1>
          <div class="add-todo-container box">
            <input onChange={this.handleChange} value={this.state.input} />
            <button onClick={this.addTodo}>ADD</button>
            {
              this.state.list.map((item, index) => (
                <Todo
                  text={item.text}
                  key={index}
                  index={index}
                  deleteToDo={this.deleteToDo}
                  isClicked={item.isClicked}
                  markComplete={this.markComplete}
                />
              ))
            }
          </div>
        </header>
      </div>
    );
  }
}
export default App