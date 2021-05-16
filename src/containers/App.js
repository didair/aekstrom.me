import React from 'react';

import { Heading, Paragraph, List, Avatar } from '@dracula/dracula-ui';

const App = (props) => {
	return (
		<main>
			<section>
				<div className="df aic mb-4">
					<Avatar
						title="Someones face... Could it be mine?"
						src="/assets/face.jpg"
					/>

					<div className="ml-4">
						<Heading size="2xl" color="cyanGreen">
							Andreas Ekström
						</Heading>
					</div>
				</div>

				<Paragraph>
					TODO: Add something braggy right here
				</Paragraph>
			</section>

			<section>
				<div className="mb-4">
					<Heading size="xl" color="cyanGreen">
						Get in touch?
					</Heading>
				</div>

				<Paragraph>
					I would love to!
				</Paragraph>

				<List variant="unordered" color="purple">
					<a href="https://github.com/didair" target="_blank" rel="noreferrer">
						<li className="drac-text drac-text-white">
							Github
						</li>
					</a>

					<a href="https://twitter.com/andreasekstr0m" target="_blank" rel="noreferrer">
						<li className="drac-text drac-text-white">
							Twitter
						</li>
					</a>

					<a href="https://www.instagram.com/itsandreasekstrom/" target="_blank" rel="noreferrer">
						<li className="drac-text drac-text-white">
							Instagram
						</li>
					</a>

					<Paragraph size="sm" color="red">
						TODO: Add emojis here or something
					</Paragraph>
				</List>
			</section>
		</main>
	)
}

export default App;