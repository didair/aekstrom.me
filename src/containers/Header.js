import React from 'react';

import { Link } from 'react-router-dom';

const Header = (props) => {
	return (
		<header className="df jcb">
			<div className="logo">
			</div>

			<div className="menu">
				<Link to="/" className="drac-anchor drac-text drac-text-white drac-text-purple--hover">
					home
				</Link>

				<Link to="/renders" className="drac-anchor drac-text drac-text-white drac-text-purple--hover">
					renders
				</Link>

				<a href="https://github.com/didair/aekstrom.me/" rel="noreferrer" target="blank" className="drac-anchor drac-text drac-text-white drac-text-purple--hover">
					source
				</a>
			</div>
		</header>
	)
}

export default Header;