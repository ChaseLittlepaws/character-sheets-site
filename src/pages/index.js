import React from "react";
// import Header from '../components/header.js';
import Bio from "../components/Bio.js";
import Header from "../components/Header.js";
import Layout from "../components/layout.js";

function App() {
	return (
		<Layout>
			<div>
				<Header />
				<Bio />
			</div>
		</Layout>
	);
}

export default App;
