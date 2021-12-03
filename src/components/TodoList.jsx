import {useState, useEffect} from 'react';
import "./TodoList.css";
import Todo from "./Todo";

export default function TodoList(){
    const [input, setInput] = useState("test");
    const [rech, setRech] = useState("");
    const [todos, setTodos] = useState([]);
    
    useEffect(()=>{
        let todosBDD = localStorage.getItem("todos");
        if(todosBDD === null) {
            localStorage.setItem("todos", JSON.stringify([]));
            todosBDD = [];
        }
        setTodos(JSON.parse(todosBDD))
    }, []);

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos]);

    function addTodo(){
        let tmp = [...todos];
        if(input.trim().length > 0){
            tmp.push(input);
            setTodos(tmp);
        }
        setInput("");
       
    }
    
    function supprimer(todo){
        let tmp = [...todos];
        const indice = todos.indexOf(todo);
        if(indice > -1) tmp.splice(indice,1);
        setTodos(tmp);
    }

    function rechercher(strRech, liste){
        let tmpRech = strRech.toLowerCase();
        let res = liste.filter(todo => {
            let lowerTodo = todo.toLowerCase();
            if(lowerTodo.indexOf(tmpRech) > - 1) return todo;
        });

        return(res)
    }

    let displayTodos = rechercher(rech, todos).map((todo, i)=>{
        return (
            <Todo key={"todos-"+i} titre={todo} supprimer={supprimer} />
        )
    });
    
    return (
        <div>
            <h1>Faire ses devoirs 
                <span className="nb-todos badge rounded-pill bg-info text-dark">
                    {todos.length}
                </span>
            </h1>
            <hr />

            <div className="input-group mb-3">
                <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} className="form-control" placeholder="Saisir une todo"  />
                <button onClick={addTodo} className="btn btn-outline-info" type="button"> + </button>
            </div>
            
            { todos.length > 0 &&
                <div className="input-group mb-3">
                    <input type="search" value={rech} onChange={(e)=>{setRech(e.target.value)}} className="form-control" placeholder="Rechercher ..."  />
                    <button className="btn btn-outline-info" type="button"> Rechercher </button>
                </div>
            }
            <ul className="list-group list-group-flush">
                {displayTodos}
            </ul>
        </div>
    )
}
