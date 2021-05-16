import React from 'react';
import axios from 'axios';

// import { useQuery } from 'react-query';

axios.get(`https://api.imgur.com/3/album/XldvGKy`, {
	headers: {
		'Authorization': 'Client-ID ' + process.env.REACT_APP_IMGUR_CLIENT,
	}
})
.then(res => console.log('response', res))

const Renders = (props) => {
	// const albumId = 'XldvGKy';

	return (
		<div>
			yay!
		</div>
	);
}

export default Renders;