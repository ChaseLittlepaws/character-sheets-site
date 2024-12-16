import { Link } from "gatsby";
import * as React from "react";
import {
	container,
	navLinkItem,
	navLinks,
	navLinkText,
} from "../styles/header.module.css";
import blogsIcon from "/src/images/blogsIcon.png";
import favoritesIcon from "/src/images/favoritesIcon.png";
import photosIcon from "/src/images/photosIcon.png";
import socialsIcon from "/src/images/socialsIcon.png";
import storeIcon from "/src/images/storeIcon.png";
import storiesIcon from "/src/images/storiesIcon.png";

const Header = () => {
	const data = [
		{
			name: "Photos",
			nav: "/photos",
			icon: photosIcon,
		},
		{
			name: "Favorites",
			nav: "/favorites",
			icon: favoritesIcon,
		},
		{
			name: "Stories",
			nav: "/stories",
			icon: storiesIcon,
		},
		{
			name: "Blogs",
			nav: "/blogs",
			icon: blogsIcon,
		},
		{
			name: "Store",
			nav: "/store",
			icon: storeIcon,
		},
		{
			name: "Socials",
			nav: "/socials",
			icon: socialsIcon,
		},
	];

	return (
		<div className={container}>
			<nav>
				<ul className={navLinks}>
					{data.map(({ name, nav, icon }) => (
						<li className={navLinkItem} key={name}>
							<Link to={nav} className={navLinkText}>
								<img
									src={icon}
									alt={name}
									style={{ width: "105px", height: "auto" }}
								/>
								{name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Header;
