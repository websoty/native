import { useEffect, useState } from "react";
import { loadValue, saveValue } from "../helpers/storage";
import { Todo } from "../types/todo";


// const defaultTodos: Todo[] = [
//   { id: 1, title: "buy me1", isCompleted: false },
//   { id: 2, title: "buy me2", isCompleted: false },
//   { id: 3, title: "buy me3", isCompleted: false },
// ];


  const useTodo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

      // 1. download todo form start
    useEffect(() => {
      const fetchTodos = async () => {
        const savedTodos = await loadValue("todos");
        if (savedTodos) {
          setTodos(savedTodos);
        }
      };
      fetchTodos();
    }, []);

    // 2.every time while changes todos save as
    useEffect(() => {
      saveValue("todos", todos);
    },[todos])


  
  const addTodo = (title: Todo["title"]) => {
    setTodos(prev => [...prev, { id: Date.now(), title, isCompleted: false }]);
  };

  const onDeleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const onCheckTodo = (id: Todo['id']) => {
    setTodos(todos.map(todo => todo.id === id 
      ? {...todo, isCompleted: !todo.isCompleted} : todo));
  }

  const onUpdateTodo = (id: Todo['id'], title: Todo['title']) => {
    setTodos(todos.map(todo => (todo.id === id ? {...todo, title} : todo)));
  }

  return (
    {
      todos,
      addTodo,
      onDeleteTodo,
      onCheckTodo,
      onUpdateTodo
    }
  )
}

export default useTodo