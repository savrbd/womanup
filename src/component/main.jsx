import React, { useState } from 'react';
import AddTodoForm from './addTodoForm';
import GroupList from './groupList';
import TableTodos from './tableTodos';
import getRandomInt from './utils/getRandomInt'

const Main = () => {
      const initialState = [{id:1, active: true, todo: "Тестовое задание", date: "2022-10-12"}, {id:2, active: true, todo: "Прекрасный код", date: "2022-12-23"}] 
      const [todos, setTodos]= useState(initialState);
      const cc = {
          active: true,
          todo: "",
          date: ""
        };
      const [data, setData] = useState(cc);
      const groupList= ["Active", "Completed"];
      const [selectedProf, setSelectedProf] = useState()
      const handleChange = ({ target }) => {
        setData((prevState) => ({
          ...prevState,
          [target.name]: target.value,
        }));
      };
      const addNewTodo = () => {
        setTodos((prevState)=>([...prevState, {id: getRandomInt(100, 1000),...data}]))
        setData(cc)
      }
      const handleTodoCompleted = (params) => {
        const newTodos=[...todos];
        const elementIndex= todos.findIndex((el)=>el==params)
        newTodos[elementIndex]={...params, active:!params.active}
        setTodos(newTodos)
      }
      const handleItemSelect = (item) => {
        setSelectedProf(item)
      }
      const handleDeleteSelect = () => {
        setSelectedProf()
      }
      const handleTodoDelete = (item) => {
        setTodos(todos.filter((todo)=>{return todo!==item}))
      }
      const selectTodos = selectedProf? todos.filter((item)=> { if(selectedProf==="Active"){ return item.active===true}
    else if(selectedProf==="Completed"){return item.active===false}}): todos
    return (
        <>
            <h1>todos</h1>
            <AddTodoForm data={data} onChange={handleChange} addNewTodo={addNewTodo}/>
            <div className='d-flex'>
              <GroupList groupList={groupList} onItemSelect={handleItemSelect} selectedProf={selectedProf} onDeleteSelect={handleDeleteSelect}/>
              <TableTodos todos={selectTodos} onTodoCompleted={handleTodoCompleted} onTodoDelete={handleTodoDelete} />
            </div>
        </>    
        
    );
}
 
export default Main;