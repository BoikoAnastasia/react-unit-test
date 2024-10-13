// import React, { useEffect, useState } from "react";

// const App = () => {
//     const [data, setData] = useState(null);
//     const [toggle, setToggle] = useState(false);
//     const [value, setValue] = useState("");
//     useEffect(() => {
//         setTimeout(() => {
//             setData({});
//         }, 100);
//     }, []);

//     const onClick = () => setToggle(toggle => !toggle)

//     return (
//         <div>
//             <h1 data-testId="input-elem">{value}</h1>
//             {toggle && <div data-testid="toggle-elem">toggle</div>}
//             {data && <div> data</div>}
//             <h1>Hello</h1>
//             <button data-testid="toggle-btn" onClick={onClick}>Click me</button>
//             <input onChange={e=>setValue(e.target.value)} type="text" placeholder="input value" />
//         </div>
//     );
// };

// export default App;

import React from "react";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <div>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;
