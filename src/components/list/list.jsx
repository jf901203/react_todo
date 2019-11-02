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
    const display=todos.length===0 ? 'block' : 'none'
    return (
      <div className="list_content">
        <p>评论回复:</p>
        <h1 style={{display}}>暂无评论,点击左侧添加评论</h1>
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
