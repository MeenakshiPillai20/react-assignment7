import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Meenakshi',age: '23',course:' MERN',batch: 'July' },
    { id: '1', name: 'Poonam',age: '23',course:' MERN',batch: 'May' }
]
const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded(state,action){
            state.push(action.payload)
        },
        postEdit(state,action){
            const {id,name,age,course,batch} = action.payload;
            const exStudent = state.find((user) => user.id  === id)
            if (exStudent){
                exStudent.name = name;
                exStudent.age = age;
                exStudent.course = course;
                exStudent.batch = batch;

            }
        }
    }

})
export default postSlice.reducer
export const {postAdded,postEdit} = postSlice.actions

