import React, { Component } from 'react'
import PropTypes from 'prop-types' 
import './add.css'
export default class Add extends Component {

  // 组件的对象的属性 这样不用写constructor()
  state={
    name:'',
    text:''
  }
  static propTypes={
    addHandle:PropTypes.func.isRequired
  }

  // 箭头函数没有组件的this 继承的外面的this
  handleSub=(event)=>{
    const todo=this.state
    this.props.addHandle(todo)
    // 清除输入框数据
    this.setState({
      name:'',
      text:''
    })

    event.preventDefault()

  }

  handleNameChange=(event)=>{
   const name=event.target.value
   this.setState({
     name
   })

  }

  handleTextChange=(event)=>{
    const text=event.target.value
    this.setState({
      text
    })
  }

  render() {
    const {name,text}=this.state
    return (
      <div className="add_content">
        <h1>我是add组件</h1>
        <form onSubmit={this.handleSub}>
          <p>用户名</p>
          <input type="text" value={name}  onChange={this.handleNameChange}/>
          <button>提交</button>
          <p>评论内容</p>
          <textarea cols="30" rows="10" value={text} onChange={this.handleTextChange} ></textarea>
        </form>
      </div>
    )
  }
}
