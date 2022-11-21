import React from 'react';
import TextField from './textField';

const AddTodoForm = ({data, onChange, addNewTodo}) => {
    return (  
        <>
            <div className='d-flex flex-row align-items-center'>
                <TextField 
                name="todo" 
                value={data.todo}
                label="задача" 
                onChange={onChange}/>
                <TextField 
                name="date" 
                value={data.date}
                label="дата"
                type="date" 
                onChange={onChange}/>
                <button type="button" className="btn btn-secondary m-2" onClick={addNewTodo}>Add</button>   
            </div>
        </>
    );
}
 
export default AddTodoForm;