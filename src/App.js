import React, {useState, useEffect} from "react";
import { Todo } from "./Todo";
import {db} from './firebase'
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';
import Swal from "sweetalert2";
const style = {
bg: `h-screen w-screen p4 bg-gradient-to-r from-[#3c9a08] to-[#092400]`,
container: `bg-slate-100 max-w-[50%] h-screen p6 w-full m-auto shadow-xl`,
heading: `text-3xl font-bold text-center text-gray-800 p-2 mb-4`,
form: `flex justify-between ml-5`,
input: `border p-2 w-full text-xl`,
button: `p1 ml-20 mr-20 max-w-[50px]`,
count: `text-center p-2`,
dbutton: `flex text-center m-auto p-2 max-w-4 mb-4 bg-red-400`
};






function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
 

  //Add todo 
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === '') {
      Swal.fire('Please enter a valid todo')
      return;
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    });
    setInput('');
  };

  // Read todo 
  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Update todo - completed or not
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };



  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h1 className={style.heading}>Todo App</h1>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type='text'
            placeholder='Please Add Todo'
          />
        <button className={style.button}><img
        src="/addbtn.png"
        className="w-7 h-7 mr-4"
      /></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} 
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo} />
          ))}
        
        </ul>
        {todos.length < 1 ? null : (
          <p className={style.count}>{`You have ${todos.length} todos`}</p>
        )}
      </div>
   
    </div>
  );
        }
        
export default App;
