import React from "react";
import { container,
        content,
        h1Style,
        pStyle
    } from '../styles/header.module.css'

function Bio() {
    return (
      <div className={container}>
        <div className={content}>
            <h1 className={h1Style}>Hello, world!</h1>
            <p className={pStyle}>Welcome to my website.</p>
        </div>
      </div>
    );
}

export default Bio;