import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
    
	return (
        <header className="mb-3">
            <ul className="nav justify-content-center navbar-light bg-light py-4">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/surf">Surf</Link>
                </li>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Top Ten Surfer
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><NavLink className="dropdown-item" to="/surf/John John Florence">John John Florence</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/surf/Gabriel Medina">Gabriel Medina</NavLink></li>
                    </ul>
                </div>
            </ul>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center">Gift Expert App with TS</h2>
                    </div>
                </div>
            </div>
        </header>
	);
};
