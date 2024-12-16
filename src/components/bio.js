import React from "react";
import princessImg from "../images/princess.png";
import {
	bioText,
	container,
	content,
	h1Style,
	h2Style,
	highlight,
	list,
	listItem,
	princess,
	profile,
	pStyle,
} from "../styles/bio.module.css";

const paragraph =
	"Kasey, an anthropomorphic, white-tailed deer, was born with partial albinism and autism on April 17th in Fox Hollow, North Carolina. They are perpetually 3 years old.\nDespite having difficulty expressing their feelings with words, Kasey loves to communicate through their art, which is full of vivid colors and playful imagery. They draw inspiration from animals, especially those from South America, and love learning interesting facts about them.\nKasey's authenticity and physical expressiveness make them very approachable, and their moods are infectious, helping them build meaningful relationships with others. They are always honest with their thoughts and feelings, making their connections genuine and trustworthy. Their appreciation for others is often expressed through their art, making it a great honor to receive a piece from them.\nAlthough Kasey has difficulty with loud or repetitive noises, and feeling confined or trapped, their supportive family and friends help them cope during these situations. Kasey also finds comfort in having a fan or lo-fi music playing, as silence puts them on edge.\nDespite the challenges they face, Kasey's unique perspective and strengths make them a beloved member of their community.";

function Bio() {
	const paragraphs = paragraph.split("\n").map((text, index) => (
		<p key={index} className={pStyle}>
			{text}
		</p>
	));
	return (
		<div className={container}>
			<div className={content}>
				<div className={bioText}>
					<h1 className={h1Style}>Kasey Littlepaws</h1>
					<p className={highlight}>
						Through their art, Kasey finds a voice that transcends
						words.
					</p>
					<p className={pStyle}>{paragraphs}</p>
				</div>
				<div className={profile}>
					<img
						className={princess}
						src={[princessImg]}
						alt="Kasey Littlepaws dressed as a princess"
					/>
					<h2 className={h2Style}>Demographic Information</h2>
					<ul className={list}>
						<li className={listItem}>Female</li>
						<li className={listItem}>3 Years Old</li>
						<li className={listItem}>White-Tailed Deer</li>
						<li className={listItem}>Born April 17th</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Bio;
