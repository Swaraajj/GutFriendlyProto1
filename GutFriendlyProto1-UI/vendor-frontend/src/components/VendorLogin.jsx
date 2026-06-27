import { useState } from "react";
import { Link } from "react-router-dom";

function VendorLogin() {

    const [loginData, setLoginData] = useState({
        phoneNo: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:8080/vendor/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(loginData)
                }
            );

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
            } else {
                alert(result.message);
            }

        } catch (error) {
            console.log(error);
            alert("Server Error");
        }
    };

    return (
        <div className="auth-container">
            <div className="card auth-card shadow-lg">
                <div className="card-body">
                    <h2 className="text-center mb-4">
                        Vendor Login
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="phoneNo"
                                value={loginData.phoneNo}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={loginData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button className="btn btn-primary w-100">
                            Login
                        </button>
                    </form>

                    <p className="mt-3 text-center">
                        New Vendor?{" "}
                        <Link to="/register">
                            Register Here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VendorLogin;