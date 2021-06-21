import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const Navbar = (props) => {
    const location = useLocation();
    const history = useHistory();

    const onBackClicked = () => {
    history.push('/');
    };

    return (
        <div className="navbar">
            {location.pathname === '/user' && <div className="back" onClick={() => onBackClicked()}>Back</div>}
            <div className="page">
                Home
            </div>
        </div>
    );
};

export default Navbar;
