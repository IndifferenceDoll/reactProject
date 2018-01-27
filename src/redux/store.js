import {createStore} from 'redux'
import combineReducers from './reducers.js'

let store = createStore(combineReducers)

export default store

//将每一个状态文件里actions的所有方法暴露出去
//将此文件里的store暴露出去
//获取的时候，通过store.getState()获取store，即所有数据组成的一个大对象state
//修改的时候，通过store.dispatch(action名字，如increment())，increment（）返回一个描述action的对象，包含一个type属性
//store.dispatch触发了store去调用总的reducers，并把state对象和描述action的对象传进去
//由于总的reducers（存放）调用了所有的子reducers（这是最中真正存放数据－state的地方），又将state对象和描述action的对象传进去
// 每一个子reducers接收到state对象和描述action的对象后，根据描述action的对象来判断怎样处理及处理哪条数据
//所以actions中每一个action的名字必须独特唯一
//子reducers执行处理方法后，如果通过传进来的action描述找到了对应的数据对象，就返回该子reducers维护的处理后数据对象，否则返回处理前的数据对象
//总的reducers拿到每一个子reducers返回的各自的数据对象后组合成一个总的数据对象，并返回给store，完成本次数据修改流程。