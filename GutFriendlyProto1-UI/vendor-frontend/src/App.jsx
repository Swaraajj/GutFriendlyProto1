import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import VendorLogin from "./components/VendorLogin";
import VendorRegister from "./components/VendorRegister";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<VendorLogin />} />
                <Route path="/register" element={<VendorRegister />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;