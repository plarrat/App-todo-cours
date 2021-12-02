export default function NavBar(props){
    return (
         <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">{props.titre}</span>
          </div>
        </nav>
    );
}