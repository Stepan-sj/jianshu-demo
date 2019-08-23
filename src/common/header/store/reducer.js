import {fromJS} from 'immutable';

//fromJS 方法把对象 转换成immutable对象，意思是不可改变
// var todos = {
//     ⋮
//     t79444dae: { title: 'Task 50001', completed: false },
//     t7eaf70c3: { title: 'Task 50002', completed: false },
//     t2fd2ffa0: { title: 'Task 50003', completed: false },
//     t6321775c: { title: 'Task 50004', completed: false },
//     t2148bf88: { title: 'Task 50005', completed: false },
//     t9e37b9b6: { title: 'Task 50006', completed: false },
//     tb5b1b6ae: { title: 'Task 50007', completed: false },
//     tfe88b26d: { title: 'Task 50008', completed: false },
//     ⋮
//     (100,000 items)
//   }
// 我要把第50,005条任务的completed改为ture。
// 用普通的JavaScript对象
// function toggleTodo (todos, id) {
//     return Object.assign({ }, todos, {
//       [id]: Object.assign({ }, todos[id], {
//         completed: !todos[id].completed
//       })
//     })
//   }
  
//   var nextState = toggleTodo(todos, 't2148bf88')
//   这项操作运行了134ms。
// 为什么用了这么长时间呢？因为当使用Object.assign，JavaScript会从旧对象（浅）复制每个属性到新的对象。
// 我们有100,000条待办事项，所以意味着有100,000个属性需要被（浅）复制。
// 这就是为什么花了这么长时间的原因。
// 在JavaScript中，对象默认是可变的。
// 当你复制一个对象时，JavaScript不得不复制每一个属性来保证这两个对象相互独立。

const defaultState =fromJS({
    focused:false,
    list:[]
});

export default (state=defaultState,action)=>{
    if(action.type=='focus'){
        // 该方法会返回一个新的对象
        return state.set('focused',true)
    }
    if(action.type=='blurs'){
        return state.set('focused',false)
    }
    if(action.type=='init'){
        
    }
    return state;
    
    
}