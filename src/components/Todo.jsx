export default function Todo({titre,supprimer}){
    return(
        <li className="list-group-item  d-flex justify-content-between align-items-center">
            {titre}
            <span>
                <button onClick={()=>supprimer(titre)} className="btn btn-sm btn-danger">Supprimer</button>
            </span>
        </li>
    )
}
