import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function VendorRegister() {

    const [vendor, setVendor] = useState({
        fName: "",
        mName: "",
        lName: "",
        phoneNo: "",
        email: "",
        aadharNo: "",
        panNo: "",
        password: ""
    });

    const handleChange = (e) => {
        setVendor({
            ...vendor,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:8080/vendor/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(vendor)
                }
            );

            if (response.ok) {
                alert("Vendor Registered Successfully!");

                setVendor({
                    fName: "",
                    mName: "",
                    lName: "",
                    phoneNo: "",
                    email: "",
                    aadharNo: "",
                    panNo: "",
                    password: ""
                });

            } else {
                const error = await response.text();
                alert(error || "Registration Failed");
            }

        } catch (error) {
            console.error(error);
            alert("Unable to connect to server");
        }
    };

    return (
        <div className="auth-container">
            <div className="card auth-card shadow-lg">
                <div className="card-body">
                    <h2 className="text-center mb-4">
                        Vendor Registration
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fName"
                                    value={vendor.fName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">
                                    Middle Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="mName"
                                    value={vendor.mName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Last Name *
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="lName"
                                value={vendor.lName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                name="phoneNo"
                                value={vendor.phoneNo}
                                onChange={handleChange}
                                maxLength="10"
                                pattern="[0-9]{10}"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={vendor.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Aadhar Number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="aadharNo"
                                value={vendor.aadharNo}
                                onChange={handleChange}
                                maxLength="12"
                                pattern="[0-9]{12}"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">
                                PAN Number
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="panNo"
                                value={vendor.panNo}
                                onChange={handleChange}
                                style={{ textTransform: "uppercase" }}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">
                                Password *
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={vendor.password}
                                onChange={handleChange}
                                minLength="8"
                                required
                            />
                            <small className="text-muted">
                                Password must be at least 8 characters long.
                            </small>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-success w-100 py-2"
                        >
                            Register Vendor
                        </button>

                    </form>

                </div>
            </div>

        </div>
    );
}

export default VendorRegister;