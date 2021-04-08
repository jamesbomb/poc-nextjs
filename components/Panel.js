import React, { useState, setState } from 'react';

//componente stateful

const Panel = () => {
    const [opened, setOpened] = useState(false);

    const toggle = () => {
        setOpened(!opened) 
        console.log("toggle " + opened)
    }

    return (
        <div>
            <h2 onClick={toggle}>Title</h2>
            <div className={opened ? "hidden" : ""}>Body</div>

            <style jsx>{`
                .hidden {
                    display: none;
                }
                h2 {
                    background-color: black;
                    color: white;
                    cursor: pointer;
                }
            `}</style>
        </div>
    )
};

export default Panel;