import React from "react";
import { container,
        content,
        h1Style,
        pStyle,
        bioText,
    } from '../styles/bio.module.css'

function Bio() {
    return (
      <div className={container}>
        <div className={content}>
            <div className={bioText}>
                <h1 className={h1Style}>Hello, world!</h1>
                <p className={pStyle}>Welcome to my website.</p>
            </div>
        </div>
      </div>
    );
}

export default Bio;