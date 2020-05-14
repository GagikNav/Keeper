import React from 'react';

const year = new Date().getFullYear();
const Footer = () => {
	return (
		<div>
			<footer>
				<p>Copyright© {year} </p>
			</footer>
		</div>
	);
};

export default Footer;
