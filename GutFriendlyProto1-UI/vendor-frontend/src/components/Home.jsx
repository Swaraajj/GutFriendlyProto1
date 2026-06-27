import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            <div className="card home-card shadow-lg">

                <h1 className="text-center mb-3">
                    Gut Friendly
                </h1>

                <p className="text-center text-muted mb-4">
                    Welcome Vendor Portal
                </p>

                <div className="d-grid gap-3">
                    <Link
                        to="/login"
                        className="btn btn-primary btn-lg"
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="btn btn-success btn-lg"
                    >
                        Register
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Home;