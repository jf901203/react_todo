import React, { Component } from 'react'
import './app.css'
import Add from '../add/add'
import List from '../list/list'

export default class app extends Component {
 
  state = {
    todos:[
      {
        name:'zhangs',
        text:'非常不错'
       }

    ]
 }
  // 函数有函数声明和表达式声明 以下用是表达式声明
  addHandle=(todo)=>{
    const {todos}=this.state
    todos.unshift(todo)
    this.setState({
      todos
    })
  }

  // 删除评论 根据数组的下标删除
 
 delHandel=(index)=>{
  const {todos}=this.state
  todos.splice(index,1)
  this.setState({
    todos
  })
 }

  render() {
    const {todos} =this.state
    return (
      <div>
         
        <div className="container">
          <Add todos={todos} addHandle={this.addHandle}/>
          <List todos={todos} delHandel={this.delHandel}/>
        </div>
        
        
      </div>
    )
  }
}
