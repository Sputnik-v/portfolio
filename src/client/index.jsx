// @ts-ignore
import React from "react";
import {createRoot} from 'react-dom/client';
import Header from "../shared/Header";

const container = document.getElementById('root');
const root = createRoot(container);

window.addEventListener('load', () => {
    root.render(<Header/>);
})



