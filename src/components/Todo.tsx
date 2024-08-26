"use client";
import React from "react";
import { useState, useEffect } from "react";

export interface todos {
  id: number;
  title: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<todos[]>([]);
  const [todoName, setTodoName] = useState<string>("");

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);

  const addTodos = () => {
    const newTodo = {
      id: Math.random(),
      title: todoName,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTodoName("");
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const checkTodo = (id: number) => {
    const newTodos = todos.map((t) => {
      if (t.id === id) {
        t.completed = !t.completed;
      }
      return t;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="w-full mt-5 flex justify-center items-center flex-col space-y-0 fixed">
          
      <div className="flex flex-col">         
        <input          
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
          className="inputtodo"
        />          
      <button className="button rounded" onClick={addTodos}> Click To Add ToDo + </button>        
      </div>       
      <div className="flex flex-col w-full justify-center items-center">      
        {todos.map((todo) => {
          return (
            <div className="flex justify-between items-center my-2 bg-slate-600 p-1 border border-solid border-gray-200 rounded">
              <div className="flex flex-row space-x-2">
                <input type="checkbox" checked={todo.completed} onChange={() => { checkTodo(todo.id); }} className="chkbox" />
                <div
                  className={`printtodo ${ todo.completed ? "line-through" : "" }`}                >
                  {todo.title}
                </div>
              </div>              
              <button onClick={() => { deleteTodo(todo.id);}} className="deletebutton px-1 py-1" > Delete </button>
            </div>
          );
        })}                 
      </div>
      <div className="project"></div>           
    </div>    
  );
};

export default Todo;
