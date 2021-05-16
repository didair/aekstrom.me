import React from 'react';
import axios from 'axios';

import { useQuery } from 'react-query';
import { Heading } from '@dracula/dracula-ui';

const Renders = (props) => {
	const albumId = 'XldvGKy';
	const { isLoading, error, data } = useQuery('rendersAlbum', () =>
		axios.get(`https://api.imgur.com/3/album/${albumId}`, {
			headers: {
				'Authorization': 'Client-ID ' + process.env.REACT_APP_IMGUR_CLIENT,
			}
		})
		.then(res => res.data.data)
	, {
		retry: false,
		refetchOnWindowFocus: false,
	})

	if (isLoading) {
		return <main className="df jcc fc">
			<Heading size="2xl" color="cyanGreen">
				Loading...
			</Heading>
		</main>
	}

	if (error) {
		return <main className="df jcc fc">
			Error: {error.errorMessage}
		</main>
	}

	return (
		<main className="df jcc fc renders">
			<div className="mb-4">
				<Heading size="2xl" color="cyanGreen">
					Renders
				</Heading>
			</div>

			<div className="df fc renders-container">
				{data != null ?
					data.images.map(image => {
						return <div className="render" key={image.id}>
							<a href={image.link} target="_blank" rel="noreferrer">
								<img src={image.link} alt={image.description} />
							</a>
						</div>
					})
				: null}
			</div>
		</main>
	);
}

export default Renders;