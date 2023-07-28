import React from "react";
import { container,
        content,
        h1Style,
        highlight,
        pStyle,
        bioText,
        profile,
        princess,
        h2Style
    } from '../styles/bio.module.css';
import princessImg from "../images/princess.png";


const paragraph = "Kasey, an anthropomorphic, female white-tailed deer, was born with partial albinism and autism on April 17th in Fox Hollow, North Carolina. She is currently residing in New Haven, Maine and is between 2 and 6 years old. \nDespite having difficulty expressing her feelings with words, Kasey loves to communicate through her art, which is full of vivid colors and playful imagery. She draws inspiration from animals, especially those from South America, and loves learning interesting facts about them. \nKasey's authenticity and physical expressiveness make her very approachable and her moods infectious, which helps her build meaningful relationships with others. \nShe is always honest with her thoughts and feelings, making her connections genuine and trustworthy. Her appreciation for others is often expressed through her art, making it a great honor to receive a piece from her. \nAlthough Kasey has difficulty with loud or repetitive noises, and feeling confined or trapped, her supportive family and friends help her cope during these situations. Kasey also finds comfort in having a fan or lo-fi music playing, as silence puts her on edge. \nDespite the challenges she faces, Kasey's unique perspective and strengths make her a beloved member of her community."

function Bio() {
    const paragraphs = paragraph.split('\n').map((text, index) => <p key={index} className={pStyle}>{text}</p>);
    return (        <div className={container}>
        <div className={content}>
            <div className={bioText}>
                <h1 className={h1Style}>Kasey Littlepaws</h1>
                <p className={highlight}>Through her art, Kasey finds a voice that transcends words</p>
                <p className={pStyle}>{paragraphs}</p>
            </div>
            <div className={profile}>
                <img className={princess} src={[princessImg]} alt="Kasey Littlepaws dressed as a princess"/>
                <h2 className={h2Style}>Demographic Information</h2>
            </div>
        </div>
        </div>
    );
}

export default Bio
    