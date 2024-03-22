
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";

import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState(""); //This is a simple texxt!!!

  const [todos, setTodos] = useState([]); //this is an array!!!

  const saveToLS = (e) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const handleADD = (e) => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(todos);
    saveToLS();
  };

  const handlechange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheck = (e) => {
    const id = e.target.name;

    let index = todos.findIndex((item) => {
      return item.id === id; //returns -1  / If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.
    });

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  };

  const handleedit = (e, id) => {
    const todoEdit = todos.filter((e) => e.id === id);
    setTodo(todoEdit[0].todo);

    const updatedTodos = todos.filter((e) => {
      return e.id !== id;
    });
    setTodos(updatedTodos);
    saveToLS();
  };

  const handledelete = (e, id) => {
    const updatedTodos = todos.filter((e) => {
      return e.id !== id;
    });
    setTodos(updatedTodos);
    saveToLS();
  };

  const handledeleteAll = (e, id) => {
    const updatedTodos = todos.filter((e) => {
      return e.id === id;
    });
    setTodos(updatedTodos);
    saveToLS();
  };

  return (
    <>
      <div className="whole-part bg-slate-100">
        <Navbar />
        {/* navbar is here */}

        <div className="ALL-OPERATION mt-5 w-[100%] mx-auto border border-slate-900 bg-slate-300 border-none p-4 md:w-[50%]">
          <div className="All-are-here w-[100%] h-[48rem] mx-auto">
            <div className="outside-Add-todos name">
              <div className="adding-todos mt-1 flex justify-center gap-1">
                <i className="ri-ball-pen-line text-2xl"></i>

                <input
                  onChange={handlechange}
                  value={todo}
                  className="UpperInput border border-neutral-800 outline-none rounded-md p-1 text-center"
                  type="text"
                  name="add-todos"
                  placeholder="Add Task"
                />

                <button
                  onClick={handleADD}
                  disabled={todo.length <= 5}
                  className="border border-amber-500 rounded-md bg-orange-400 p-1 text-sm disabled:cursor-not-allowed disabled:bg-orange-400"
                >
                  ADD
                </button>
              </div>

              <div className="Your-todos mt-8">
                <h2 className="addTodos text-center m-3">
                  <i className="ri-chat-check-fill "></i> Your Todos
                </h2>

                <div className="YourTodosMains ml-16 mr-16 h-[41rem] pt-4 border border-slate-600 border-none rounded-md bg-slate-200">
                  <div className="todos text-center w-[66%] bg-slate-300 m-auto rounded-2xl p-4 space-y-2">
                    <div className="NotodoSection flex justify-center gap-8">
                      <div className="alert-text text-center">
                        {todos.length === 0 ? (
                          <div className="text-red-600 font-semibold">
                            {" "}
                            No todo to display!
                          </div>
                        ) : (
                          <div className="text-blue-700 font-semibold">
                            {" "}
                            Daily Tasks!
                          </div>
                        )}
                      </div>

                      <div className="deleteAllTodos text-right">
                        <button onClick={handledeleteAll}>
                          <i class="ri-delete-back-2-fill"></i>Delete All
                        </button>
                      </div>
                    </div>

                    {todos.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="AddTodos flex flex-row justify-center gap-[4.5rem] items-center text-base"
                        >
                          <div className="This-contains-checkbox w-[9rem] flex flex-row gap-2 text-center">
                            <input
                              className="rounded-xl"
                              name={item.id}
                              onClick={handleCheck}
                              value={todo.isCompleted}
                              type="checkbox"
                              id="check"
                            />
                            <h2
                              className={item.isCompleted ? "line-through" : ""}
                            >
                              {item.todo}
                              {/* here is actual todo */}
                            </h2>
                          </div>
                          <div className="edit-delete-buttons flex flex-row gap-2">

                            <button
                              onClick={(e) => {
                                handleedit(e, item.id);
                              }}
                              className="edit">
                              <i className="ri-edit-box-fill"></i>Edit
                            </button>
                            
                            <button
                              name={item.id}
                              onClick={(e) => {
                                handledelete(e, item.id);
                              }}
                              className="delete"
                            >
                              <i className="ri-delete-bin-6-fill"></i>Delete
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
}

export default App;
