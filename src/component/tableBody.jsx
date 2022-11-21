import React from 'react';
const TableBody = ({todos, onTodoCompleted, onTodoDelete }) => {
    if(todos){
        return (
        <tbody>
            {
                todos.map((item)=>{ return (
                    <tr key={item.todo}>
                        <td><div onClick={()=>{onTodoCompleted(item)}}><i className={"bi bi" + (item.active? "":"-check") + "-circle"}></i></div></td>
                        <td><div className={(item.active ? "": "text-decoration-line-through")}>{item.todo}</div></td>
                        <td><div className={(new Date(item.date).getTime()< Date.now() ? "text-bg-danger": "")}>{item.date}</div></td>
                        <td><div className='input-group'><input className='form-control' type="file"/></div></td>
                        <td><div onClick={()=>{onTodoDelete(item)}}><i className="bi bi-dash-circle" style={{color:"red"}}></i></div></td>
                    </tr>)
                })
            }
            
                    
        </tbody>
    );
    }
    
}
 
export default TableBody;