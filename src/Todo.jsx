import React from 'react'
import Swal from 'sweetalert2'

const style = {
button: `p-4 max-w-[50px] border border-gray-400 m-2`,
li: `flex justify-between bg-slate-200 p-4 ml-5 mr-5 my-10 capitalize`,
  text: `text-xl mt-4 ml-2 cursor-pointer text-center`,
  textComplete: `ml-2 cursor-pointer bg-green-400`,
  liComplete: `flex justify-between bg-slate-200 p-4 ml-5 mr-5 my-10 capitalize bg-blue-500 line-through`,
  buttoncon: `flex ml-4 mr-4 p-4`,
}
export const Todo = ({todo, toggleComplete, deleteTodo}) => {

function handleClick () {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        deleteTodo(todo.id)
          Swal.fire(
            'Deleted!',
            'Your Todo has been deleted.',
            'success'
          )
        }
      })
}

  return (
    <li className={todo.completed ? style.liComplete : style.li}>
        <div className={style.row}>
            <p className={style.text}>{todo.text}</p>
        </div> 
        <div className={style.buttoncon}>
        <button onClick={() => toggleComplete(todo)} className={style.button}><img src="/check.png" alt="asd" sizes='10px'/></button>
        <button onClick={() => handleClick()} className={style.button}><img src='/cross.png' alt="asd" size='10px'/></button></div>
    </li>
    
  )
}
