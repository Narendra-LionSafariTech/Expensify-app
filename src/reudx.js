import {createStore} from 'redux'

// function counterReducer(state = { value: 0 }, action) {
//     switch (action.type) {
//       case 'counter/incremented':
//         return { value: state.value + 1 }
//       case 'counter/decremented':
//         return { value: state.value - 1 }
//       default:
//         return state
//     }
//   }
//   let store = createStore(counterReducer)

  
// store.subscribe(() => console.log(store.getState()))
// console.log(store.getState())

// store.dispatch({ type: 'counter/incremented' })
// store.dispatch({ type: 'counter/incremented' })
// store.dispatch({ type: 'counter/decremented' })


// export default counterReducer

// const store=createStore((state={count:0},action)=>{
//    switch(action.type){
//     case 'INCREMENT':
//         const incrementBy=typeof action.incrementBy==='number'?action.incrementBy:1
//         return{
//         count:state.count+incrementBy
//         // count:action.count

//         }
//     case 'DECREMENT':
//         return{
//             count:state.count-1
//         }
//     default:
//         return state
//    }
   
// })
// store.dispatch({
//     type:'INCREMENT',
//     incrementBy:5
//     // count:101
// })
// // store.dispatch({
// //     type:'INCREMENT'
// // })
// // store.dispatch({
// //     type:'INCREMENT'
// // })
// console.log(store.getState())

// console.log("decrement state")

// store.dispatch({
//     type:"DECREMENT"
// })
// console.log(store.getState())

//-------------------------------------------------------------------------------------

// const store=createStore((state={count:0},action)=>{
//    switch(action.type){
//     case 'INCREMENT':
//         // const incrementBy=typeof action.incrementBy==='number'?action.incrementBy:1
//         return{
//         count:state.count+action.incrementBy
//         // count:action.count

//         }
//     case 'DECREMENT':
//         return{
//             count:state.count-1
//         }
//     default:
//         return state
//    }
   
// })

// // const incrementCount=(payload={})=>({
// //     type:'INCREMENT',
// //     incrementBy:typeof payload.incrementBy==='number'?payload.incrementBy:1
// // })
// const incrementCount=({incrementBy=5}={})=>({
//     type:'INCREMENT',
//     incrementBy
// })
// store.dispatch(incrementCount({incrementBy:10}))
// console.log(store.getState())

//---------------------------------------------------------------------------------------------

// const countReducer=(state={count:0},action)=>{
//     switch(action.type){
//         case "INCREMENT":
//             return{
//                 count:state.count+action.incrementBy
//             }
//         default:
//             return state
//     }
// }

// const store=createStore(countReducer)

// const incrementCount=({incrementBy=1}={})=>({
//     type:'INCREMENT',
//     incrementBy
// })
// store.dispatch(incrementCount({incrementBy:5}))
// console.log(store.getState())


// export default store