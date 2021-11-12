import { Link } from "react-router-dom";

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
