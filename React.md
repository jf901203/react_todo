
## React 面向组件编程

js是面向对象的编程

基本理解和使用

## 工厂函数组件(简单组件) 没有状态的组件
//创建组件
function App(){
 return 
}

//渲染组件

ReactDOM.render(<App/>,document.getElementById('demo'))

## ES6类组件(复杂组件)
//从React类上继承类

class App extends React.Component{
  //实例创建时 会自动调用构造函数
  constructor(props){
    super(props) =>调用父类的构造函数
    this.state={
      todo:{}
    }

    this.handleClik=this.handleClik.bind(this)

  }

  constructor构造器函数可以初始化状态和绑定事件

  构造函数是唯一可以给this.state对象赋值的地方
 
//新添加的方法 内部的this不是当前组件对象
handleClik(){}

 //重写渲染方法
  render(){

    return (<div>
      <h1></h1>
    </div>)
  }
}

//渲染组件
ReactDOM.render(<App/>,document.getElementById('demo'))



 //创建组件类
 class App extends React.Component{
  constructor(props){
    super(props)
    // 初始换状态数据
    this.state={
      todos:[]
    }
  }

  //只能有一个根标签 创建虚拟dom
  render(){
    return (
      <div>
       <h1>Simple Tode List</h1>
       <Add/>
       <List/>
      </div>
    )
  }
}

  
##插入真实DOM 

1. ReactDOM.render(<App />,document.getElementById('demo'))
2. React框架会自发的渲染真实DOM
3. 绘制界面

##组件的三大属性

1 .this.state
2. this.props
3. this.refs与事件处理

##state是组件对象最重要的属性，值是对象(可以包含多个数据)


##组件被称为"状态机"，通过更新组件的state来更新对应的页面显示(重新渲染组件)


##state的编码操作 

1. 初始化状态 

2. 读取状态 

3. 更新状态 组件自身的状态(数据)

初始化状态：

constructor(props){
super(props)
this.state={
  key:val,
  key1:val1,
  key2:[]
}

}

##读取某个状态(在rende方法中读取状态)

this.state.key

##更新状态(重新设置一个对象)===>组件界面更新(在事件回调函数中更新状态)

this.setState({
  key:newVal,
  key1:newVal1
})

##sate的更新会被合并

当调用setState()的时候 React会把你提供的对象合并到当前的state中



##props 组件没有自身的状态但是要显示数据 只能通过props传递 props是外来的数据

1. props 可以接收一般数据 也可以接收函数名 (函数也是一种数据) 函数名是对函数对象的一种引用

##读取props状态

1. 在工厂函数组件的render(){} 函数中读取 props.key

2. 在类组件中读取的render(){}函数中读取 this.props.key

##理解

1. 每个组件对象都会有props(properties的简写)

2. 组件标签的所有属性都保存在props对象中

##作用

1. 通过标签属性从组件外向组件内传递变化的数据

2. 注意：组件内部不要修改props数据

##props是一个只读的属性

##编码操作

1. 内部读取某个属性值

2. this.props.key

##给组件类执行属性类型  对props中的属性值进行类型限制和必要性限制

1. 对外来的数据进行类型和必要性的限制
2. 用prop-types库 npm install --save prop-types 运行时依赖

##在类组件中声明接收声明类型的属性

Person.propTypes={
  name:PropTypes.string.isRequired,
  arr:PropTypes.array.isRequied
}

##扩展性：将对象的所有属性通过props传递

<Person {...person}>

##给类组件设置默认值 传入的属性

Person.defaultProps={
  name:'Tom'
}

##组件类的构造函数

constructor(props){
  super(props)
  console.log(props)
}


##refs 标识组件的唯一 会操作DOM

1. ref={(div)=>this.contnet=div} ===>this.contnet 得到DOM元素

2. ref="content" ===>this.refs.content 得到DOM元素



##功能界面的组件化编码流程(无比重要)

1. 拆分组件：拆分界面 抽取组件
2. 实现静态组件：使用组件实现静态页面效果 就是没有状态的组件
3. 实现动态组件： 
              1. 动态显示初始化数据 
              2. 交互功能(从绑定事件监听开始)

##数据保存在哪个组件内？

1. 看数据是某个组件需要(给组件自己)，还是某些组件需要(给共同的父组件)     

2. 需要在子组件中改变父组件的状态

3. 子组件不能直接改变符组件的状态

4. 状态在哪个组件更新状态的行为就应该在哪个组件

5. 在父组件定义函数修改状态 将函数传递给子组件 子组件调用函数


##行为就是函数 函数也是数据可以传递 传递的函数名只是函数在内存中的标识符 是一种引用 通过标识符就能找到函数

##更新状态不能直接更新 必须调用this.setState()方法 才能更新状态

1. 因为要进行新状态与旧的状态进行对比


##数据是向下流动的

1. 不管是父组件还是子组件都无法知道某个组件是有状态的还是无状态的 并且特他们也并不关心他是函数组件还是类组件
2. 这就是为什么称state为局部的或是封装的原因。除了拥有并设置了state的组件，其他组件都无法访问
3. 组件可以选择把它的state作为props向下传递到它的子组件中

##组件实例上的属性传递到组件的所有属性都保存在组件的props对象中 <FormattedDate date={this.state.date} />

1. date属性会保存在props对象中
2. 但是组件本身无法知道她是来自于父组件的state 还是父组件的props 还是手动输入


##单向数据流

1. 这通常会被叫做'自上而下'或是'单向'的数据流。任何的state总是所属于定义state的组件，而且从该state派生的任何数据或只能影响树中"低于"他们的组件

2. 如果你把一个以组件构成的树想象成一个 props 的数据瀑布的话，那么每一个组件的 state 就像是在任意一点上给瀑布增加额外的水源，但是它只能向下流动。·



##组件并没有继承关系 只是位置关系 是一种嵌套关系

	<App>
	  <WelCome></WelCome>
	</App>

1. App组件是WelCome组件的父组件 

2. WelCome组件是App组件的子组件

##Cannot read property 'todos' of undefined ：意思是在undefined对象上读取todos属性

##组件化：当应用以多组件的方式实现，这个应用就是一个组件化的应用

##模块化：当应用的js都是以模块来编写，这个应用就是一个模块化的应用

##组件：用来实现特定功能效果的代码集合 特定功能效果代码的集合

##模块：向外提供特定功能的程序 一般就是一个js文件


##组件化编写功能的流程

1. 拆分组件

2. 实现静态组件(没有动态数据 没有交互 只有静态界面) 每一个组件都有一个render函数

3. 实现动态组件： 
                1. 实现初始化数据动态显示
                2. 实现交互功能(绑定事件监听 更新状态)


##form表单事件绑定有两种做法

   1. 给具体表单元素添加点击的监听
   2. 给这个form表单添加监听submit

##在react应用中 如何收集表单输入的数据

##包含表单的组件分类

1. 受控组件：表单项输入数据能自动收集成状态 自动收集数据 必须要加onChenge监听 在输入的过程中已经收集好了 操作状态

2. 非受控组件：需要时才手动读取表单输入框中的数据 会操作DOM

##受控组件会自动收集表单数据

1. 需要初始化状态
2. 需要绑定onChange事件监听
3. value={name}

##非受控组件 不会自动收集表单数据 

1. 手动收集
2. this.refs.name.value


##React中的事件都是自定义的 没有用原生DOM的事件

1. onClick
2. onSubmit
3. onChange
4. onInput
5. onFocus
6. onBlur

##组件的创建过程

1. <App/>被渲染的时候 React会调用App组件的构造函数 构造函数会执行一遍
2. React会调用App组件的render()方法 返回虚拟对象
3. 渲染虚拟DOM对象成为真正的DOM对象后，React会调用ComponentDidMount()钩子
4. ComponentDidMount()可以调用setState()方法 更新state的状态 再次调用组件中render()方法 虚拟DOM中的this.state.date就是更新后的数据了 React也会相应的更新真实DOM
5. 一旦App组件从真实DOM中被移除 React就会调用componentWillUnMount()钩子方法 

##组件中的render()方法 一旦状态数据发生改变就会被从新调用


##虚拟DOM

1. React操作的是虚拟DOM
2. React没有指令表达式 只有{}表达式 
3. React遇到{}表达式 就会以解析js代码来解析
4. {}代表里面要写js代码
5. {{}} 外层大括号代表要写js代码 里面的大括号代表是一个对象 js的大括号代码对象

##组件对象的生命周期(组件从创建到死亡的过程) 

1. vue组件的对象的生命周期(初始化阶段==>更新阶段==>销毁阶段)
2. React组件对象的生命周期(初始化阶段==>更新阶段==>卸载阶段)


##每一个组件实例都有生命周期 类组件是继承父类的组件 继承下来的才会有这些回调钩子  函数组件没有这些钩子回调函数

1. 初始化阶段
2. 更新阶段
3. 销毁阶段

##第一个是组件初始化(init)阶段

	 class Life extends React.Component{
	    //初始化阶段 设置props属性和状态
	    construct(props){
	     super(props)  ===>此方法会调用父类React的构造函数
         this.state={}   
	    }
	    render(){
	      
	    }
	   }

1. Life类继承了React.Component这个父类 也继承了react的基类，才能有render()方法和生命周期等方法可以使用。这也说明函数组件不能使用这些方法
2. super(props)用来调用父类React的构造方法(constructor())，也将父组件的props注入给子组件(单向数据流),供子组件读取(组件中的props只读不可变，state可变)
3. 组件中的constructor()方法用来做一些初始化工作

##第二个阶段挂载有三个时期(组件挂载前===>组件挂载===>组件挂载后)

1. 挂载：将虚拟DOM塞进真实DOM的容器中称为挂载 ReactDOM.render(<Life msg="太难了"/>,document.getElementById('demo'))

##componentWillMount()钩子

1. 在组件挂载到DOM前componentWillMount()调用，且只会调用一次，这个时期调用this.setState()不会引起重新渲染

##render()组件中的 render()钩子回调函数返回虚拟DOM 如果状态改变或者props接收的值发生改变将会出发render()函数的重新调用

1. 根据组件的props和state(无论两者的重新传递和重新赋值，值是否有变化，都可以引起组件的重新render())
2. 返回一个React元素(描述组件 即UI)，不负责组件的实际渲染工作 只负责返回UI组件 不能在这里调用this.setState() 会有改变组件状态的副作用
3. render()函数不负责渲染工作 只负责将虚拟DOM返回
4. 渲染工作是由React框架自发的将虚拟DOM对象渲染成真实的DOM对象

##componentDidMount()钩子

1. 组件挂载到DOM后调用 且只会调用一次
2. 这个钩子可以调用this.setState()方法重新设置状态对象
3. 可以发送ajax异步请求 获取数据重新设置状态值 this.setState()


##第三阶段是组件的更新阶段update()  只渲染发生改变的DOM 绘制更新后的DOM

1. this.setState()
2. componentWillUpdate()
3. render() ===>重新返回虚拟DOM对象
4. componentDidUpdate()


##造成组件更新有三种情况

###父组件重新render

1. 父组件重新render引起子组件render的情况有两种
2. 直接使用 每当父组件重新render导致的重传props，子组件将直接跟着重新render，无论props是否有变化。可通过shouldComponentUpdate()方法优化
	
	class Child extends Component {
	   shouldComponentUpdate(nextProps){ 
	       // 应该使用这个方法，否则无论props是否有变化都将会导致组件跟着重新渲染
	        if(nextProps.someThings === this.props.someThings){
	          return false
	        }
	    }
	    render() {
	        return <div>{this.props.someThings}</div>
	    }
	}

3. 在componentWillReceiveProps方法中，将props转换成自己的state

	class Child extends Component {
	    constructor(props) {
	        super(props);
	        this.state = {
	            someThings: props.someThings
	        };
	    }
	    componentWillReceiveProps(nextProps) { // 父组件重传props时就会调用这个方法
	        this.setState({someThings: nextProps.someThings});
	    }
	    render() {
	        return <div>{this.state.someThings}</div>
	    }
	}

4. 组件本身调用setState，无论state有没有变化。可通过shouldComponentUpdate方法优化。

	class Child extends Component {
	   constructor(props) {
	        super(props);
	        this.state = {
	          someThings:1
	        }
	   }
	   shouldComponentUpdate(nextStates){ 
            
            // 应该使用这个方法，否则无论state是否有变化都将会导致组件重新渲染
	        if(nextStates.someThings === this.state.someThings){
	          return false
	        }
	    }
	
	   handleClick = () => { // 虽然调用了setState ，但state并无变化
	        const preSomeThings = this.state.someThings
	         this.setState({
	            someThings: preSomeThings
	         })
	   }
	
	    render() {
	        return <div onClick = {this.handleClick}>{this.state.someThings}</div>
	    }
	}


##此阶段分为componentWillReceiveProps，shouldComponentUpdate，componentWillUpdate，render，componentDidUpdate

1. componentWillReceiveProps(nextProps)

    props引起的组件更新过程中，参数nextProps是父组件传给当前组件的新props。但父组件render方法的调用不能保证重传给当前组件的props是有变化的，所以在此方法中根据nextProps和this.props来查明重传的props是否改变，以及如果改变了要执行啥，比如根据新的props调用this.setState出发当前组件的重新render

2. shouldComponentUpdate(nextProps, nextState)

    此方法通过比较nextProps，nextState及当前组件的this.props，this.state，返回true时当前组件将继续执行更新过程，返回false则当前组件更新停止，以此可用来减少组件的不必要渲染，优化组件性能。

3. componentWillUpdate(nextProps, nextState)

    此方法在调用render方法前执行，在这边可执行一些组件更新发生前的工作，一般较少用。

4. render() 这边只是重新调用。
   
5. componentDidUpdate(prevProps, prevState)

    此方法在组件更新后被调用，可以操作组件更新的DOM，prevProps和prevState这两个参数指的是组件更新前的props和state


##卸载阶段

1. 此阶段只有一个生命周期方法：componentWillUnmount
2. 此方法在组件被卸载前调用，可以在这里执行一些清理工作，比如清楚组件中使用的定时器，清除componentDidMount中手动创建的DOM元素等，以避免引起内存泄漏。


##组件生命周期回调函数(1.你定义的 2.你没有调用 3.最后执行了)这些钩子方法不写在类函数里面它自己也会调用

##只是说你不重写在类中的这些钩子就没有机会插入想要做的事情 重写这些方法就能做一些我们直接想要做的事情

1. 也叫钩子函数
2. 总在一定的时刻被调用
3. 不同的钩子会在不同的时刻被调用

##初始化阶段调用的回调函数  只执行一次(只出生一次)

1. constructor()===>实例初始化
2. componentWillMount()==>组件将要挂载
3. render()===>返回虚拟DOM
4. componentDidMount()  ===>重写最多的方法

##更新阶段(可以执行N次)

1. componentWillReceoviProps() ===>组件将要接受新的属性
2. shouldComponentUpdate()  ===>this.setState() 数据更新时
3. componentWillUpdate()    ===>this.forceUpdate()
4. render()===>返回新的虚拟DOM
5. componnetDidUpdate() ===>数据和页面都已经更新

##销毁阶段 只执行一次(只死亡一次)

1. componentWillUnmount() ===>组件将要销毁


##声明式编程

1. 数学题中的填空题
2. 只需要往里东西
3. React是声明式编程 已经声明好了钩子函数 我们直接用就行了
4. Vue是声明式编程   已经声明好了钩子函数 我们直接用就行了

##命令式编程

1. jquery每一步都需要自己写
2. 数学题中的问答题(先做这一步再做下一步 每一个步都需要自己写)
3. 所有流程都是自己写


##生命周期详述

1. 组件的三个生命周期状态
   
  - Mount ===>插入真实DOM
  - Update===>被重新渲染
  - Unmount===>被移出真实DOM

2. React为每个状态都提供了钩子函数
 
  - componentWillMount() ===>组件将挂载
  - componentDidMount()  ===>组件挂载后
  - componentWillUpdate()===>组件将更新
  - componentDidUpdate() ===>组件更新后

3. 生命周期流程
   
   1. 第一次渲染显示：ReactDOM.render()
   
      - constructor()：创建对象 初始化state
      - componentWillMount():组件将要挂载的钩子
      - render():插入虚拟DOM回调
      - componentDidMount():组件挂载后的钩子
      
    2. 每次更新state:this.setState() props
  
         - componentWillUpdate():组件将要更新的钩子
         - render():重新渲染 render钩子会被重新调用
         - componentDidUpdate():组件已经更新的钩子
         
     3. 移除组件：ReactDOM.unmountComponentAtNode(containerDOM) 卸载某个节点上的组件

         - componentWillUnmount():组件将移除
         
  
 ##重要的钩子

1. render() 初始化渲染或数据时调用 render()方法返回的是虚拟DOM 形成的树状结构 都是普通的js对象 不是真实的DOM节点
2. componentDidMount() 开启监听 发送ajax请求 初始化的异步操作
3. componentUnMount() 做一个收尾的工作 如：清理定时器
4. componentWillReceiveProps() 组件将接受更新后的props属性


##每一个生命周期钩子都是给你一个机会在某一时刻做一些有意义的事情

1. 不同时刻做的事情有不一样
2. 每一个钩子都是不同的函数 不同的作用域
3. 同一个组件对象中的函数的作用域是不同的 但是都能看见所在的组件对象this
4. 如果两个函数想看到同一个东西 就想办法把一个变量放到这个两个函数都能看得见的地方 放在同一个对象里面


##组件对象的生命周期钩子流程早已经定义好了 在后面的钩子不会比前面的钩子先执行

1. 流程是固定的 不会乱执行的
2. constructor()
3. componentWillMount()
4. render()
5. componentDidComponet()
6. componentWillUpdate()
7. render()
8. componentDidUpdate()
9. componentWillUnMount()
10. 这些钩子都是固定的 在后面钩子不会比在前面的钩子先执行

##虚拟DOM与DOM Diff(不同)算法



###虚拟DOM

1. 更少的操作真实DOM
2. 减少操作DOM的次数
3. 虚拟DOM对象比真实DOM对象要轻
4. render()函数返回return的就是虚拟DOM对象
5. 更新虚拟DOM界面不会发生改变 更新真实DOM界面会发生改变
6. React框架会根据虚拟DOM去渲染真实DOM
7. 我们只需要去更新虚拟DOM 只需要关心数据 数据发生改变 虚拟DOM就会发生改变
8. 更新状态this.setState()就会触发虚拟DOM的更新


###虚拟DOM 初始化显示

1. this.state={}初始化数据
2. 创建虚拟DOM
3. 渲染真实DOM
4. 绘制界面显示


##页面根据数据来渲染

1. 数据产生虚拟DOM就产生
2. 虚拟DOM产生框架就会去渲染真实DOM

##state状态对象与setState()状态对象

1. this.state={}     老的状态对象
2. this.setState({}) 新的状态对象
3. 老状态和新的状态在内存中自发的比较 这个就是为什么不能直接去修改老的状态而是直接调用this.setState()设置一个新的状态
4. 新老数据的差异就体现为虚拟DOM对象的差异 
5. 新的数据产生新的虚拟DOM产生
6. 新的虚拟DOM与老的虚拟DOM进行比较产生不想的同虚拟DOM
7. 而不同的虚拟DOM就是要更新的区域
8. 最终将对比后的虚拟DOM渲染为真实的DOM

##DOM Diff算法(新的虚拟DOM与老的虚拟DOM的一种比较) 更新显示

1. this.setState()方法会更新状态
2. 重新render()创建虚拟DOM树
3. 新的虚拟DOM树与老的虚拟DOM树相比较差异
4. 更新差异对应真实DOM
5. 局部界面重绘

##我们的是操作虚拟DOM 在操作的过程中真实的DOM是不会发生改变的

1. 等到比较完差异之后统一做出改变
2. 批量的去改变
3. DOM diff算法 能够实行最小的重绘


##React效率高

1. 在于虚拟DOM和DOM diff
2. 能够最小更新页面区域


##React-cli

1. depedencies:运行时依赖
2. devDependencies:开发时依赖==>编译打包时才需要


##虚拟DOM

1. 给虚拟DOM绑定的事件都是React自身的事件
2. 给虚拟DOM的类属性都是React自身的类型className


##一个文件夹怎么才能称之为包

1. 一个应用就是一个包
2. 有一个专门描述包的文件 package.json文件
3. package.json描述当前项目相关信息的文件

##package.json

1. 标识     name:名称  version:版本号
2. 项目依赖 运行时依赖  开发时依赖==>编译打包时需要
3. 打包运行的一些命令

##全局下载脚手架

1. 所有的应用都能看的见
2. 一次下载即可

##使用create-react-app 创建react应用

1. 一个初始化的空项目
2. 不是直接去网上下载
3. 而是通过一个工具去下载 这个工具就叫做脚手架

# 1.1. react脚手架(去下载一个空项目 而不是直接去网上下载)

## 1. xxx脚手架：用来帮助程序员快速创建一个基于xxx库的模板项目

	1. 包含所有需要的配置
	2. 指定好了所有的依赖
	3. 可以直接安装/编译/运行一个简单的效果

## 2. react提供了一个用于创建react项目的脚手架库：create-creat-app

## 3. 项目的整体技术架构为:react+webpack+es6+eslint

## 4. 使用脚手架开发的项目的特点：模块化 组件化 工程化

##工程化

1. 通过一个命令就可以对项目进行打包 编译 运行
2. 一个npm命令就行了


##创建项目并启动

1. npm install -g create-react-app ===> 全局安装react脚手架
2. create-react-app demo ===>用react创建一个空项目
3. cd demo   ===>进入到项目中
4. npm start ===>在内存中编译 打包 并启动项目
5. npm root -g ===>查看全局下载根目录
6. npm build ===>打包生成应用


##给组件类声明属性权限

1. static propTypes={}
2. puplic propTypes={} 公有的成员属性
3. private propTypes={} 私有的成员属性 当前类作用域可以方法 子类不可以方法 实例不可以方法
4. protected propTypes={} 受保护的成员属性 当前类可以方法和子类可以方法 实例不可以方法


##给组件对象声明属性

1. state={}
2. addhandle=()=>{} 


##更新组件对象的状态 因为React没有做数据代理

1. 更新组件时必须调用this.setState()方法

##通过标签属性传递的数据都保留在props对象中

1. 读取属性this.props.xxx