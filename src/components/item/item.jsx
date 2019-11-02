import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './item.css'
export default class Item extends Component {
  static propTypes={
    todo:PropTypes.object.isRequired,
    delHandel:PropTypes.func.isRequired,
    index:PropTypes.number.isRequired
  }
  deleteHandle=()=>{
    const {todo,delHandel,index}=this.props
    if(window.confirm(`确定删除${todo.name}`)){
    
     delHandel(index)

    }
    
  }

  render() {
    const {todo}=this.props
    return (
      <div>
       
           <li className="item">
           <p>{todo.name}说</p>
           <p>{todo.text}</p>
           <button className="btn" onClick={this.deleteHandle}>删除</button>
           </li>
           
          
        
      </div>
    )
  }
}
