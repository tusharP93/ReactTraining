import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const Showhide = ({ children }) => {
    const [show, setShow] = useState(false);

    function toggleShow() {
        if (show === false) {
            setShow(!show)
        }
    }

    function toggleHide() {
        if (show === true) {
            setShow(!show)
        }
    }

    return (
        <div className="component-container">
            <Button variant="danger" onClick={toggleHide}>Hide Component</Button>
            {show && children}
            <br />
            <Button variant="danger" onClick={toggleShow}>Show Component</Button>
        </div>
    );

}

export default Showhide;