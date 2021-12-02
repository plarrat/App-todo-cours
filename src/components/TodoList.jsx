import {useState} from 'react';
import "./TodoList.css";

export default function TodoList(){
    const [input, setInput] = useState("test");
    const [rech, setRech] = useState("");
    const [todos, setTodos] = useState([]);
    const [todosFiltre, setTodosFiltre] = useState([]);
   
    function addTodo(){
        let tmp = [...todos];
        tmp.push(input);
        setTodos(tmp);
        setTodosFiltre(tmp);
        setInput("");
        rechercher(rech);
    }
    
    function supprimer(todo){
        let tmp = [...todos];
        const indice = todos.indexOf(todo);
        if(indice > -1) tmp.splice(indice,1);
        setTodos(tmp);
        setTodosFiltre(tmp);
        rechercher(rech);
    }

    function rechercher(strRech){
        setRech(strRech);
        let tmpRech = strRech.toLowerCase();
        let res = todos.filter(todo => {
            let lowerTodo = todo.toLowerCase();
            if(lowerTodo.indexOf(tmpRech) > - 1) return todo;
        });

        setTodosFiltre(res)
    }

    let displayTodos = todosFiltre.map((todo, i)=>{
        return (
            <li key={"todos-" + i} className="list-group-item  d-flex justify-content-between align-items-center">
                {todo}
                <span>
                    <button onClick={()=>supprimer(todo)} className="btn btn-sm btn-danger">Supprimer</button>

                </span>
            </li>
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

            <div className="input-group mb-3">
                <input type="search" value={rech} onChange={(e)=>{rechercher(e.target.value)}} className="form-control" placeholder="Rechercher ..."  />
                <button className="btn btn-outline-info" type="button"> Rechercher </button>
            </div>

            <ul className="list-group list-group-flush">
                {displayTodos}
            </ul>
        </div>
    )
}