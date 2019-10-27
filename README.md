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


##数组的splice()方法 这个方法增 删 改

1. splice(index,1) 删除1个元素
2. splice(index,0,item)增加一个元素
3. splice(index,1,item)替换一个