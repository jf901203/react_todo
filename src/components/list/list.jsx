import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Item from '../item/item'
import './list.css'

export default class List extends Component {

  // 给组件类添加属性
  static propTypes={
       todos:PropTypes.array.isRequired,
       delHandel:PropTypes.func.isRequired
     }

  render() {
    const {todos,delHandel}=this.props
    return (
      <div className="list_content">
        <h1>我是list组件</h1>
         <ul>
           {
             todos.map((todo,index)=><Item 
             key={index} 
             todo={todo}
             delHandel={delHandel}
             index={index}
             />)
           }
         </ul>
      </div>
    )
  }
}
// 声明接收属性的类型用PropTypes库
// List.propTypes={
//   todos:PropTypes.array.isRequired
// }
