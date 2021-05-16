import React from 'react';

import { Heading, Paragraph, List, Avatar, Anchor } from '@dracula/dracula-ui';

const Home = () => {
	return (
		<main className="df jcc fc">
			<section>
				<div className="df aic mb-4">
					<Avatar
						title="Someones face... Could it be mine?"
						src="/assets/face.jpg"
					/>

					<div className="ml-4">
						<Paragraph size="sm">
							Hello! I'm
						</Paragraph>

						<Heading size="2xl" color="cyanGreen">
							Andreas Ekström
						</Heading>
					</div>
				</div>

				<Paragraph color="red">
					TODO: Add something braggy right here
				</Paragraph>
			</section>

			<section>
				<div className="mb-2">
					<Heading size="xl" color="cyanGreen">
						About me
					</Heading>
				</div>

				<Paragraph>
					I'm a senior software developer from Sweden working in the education tech industry.
					<br /><br />
					Total mechanical keyboard nut, Blender hobbyist & open-source advocate.
					<br />
					Always working on something cool!
				</Paragraph>
			</section>

			<section>
				<div className="mb-2">
					<Heading size="xl" color="cyanGreen">
						Get in touch?
					</Heading>
				</div>

				<Paragraph>
					I would love to!
				</Paragraph>

				<List variant="unordered" color="purple">
					<li className="drac-text drac-text-white">
						<Anchor href="https://github.com/didair" isExternal>
							Github
						</Anchor>
					</li>

					<li className="drac-text drac-text-white">
						<Anchor href="https://twitter.com/andreasekstr0m" isExternal>
							Twitter
						</Anchor>
					</li>

					<li className="drac-text drac-text-white">
						<Anchor href="https://www.instagram.com/itsandreasekstrom/" isExternal>
							Instagram
						</Anchor>
					</li>

					<Paragraph size="sm" color="red">
						TODO: Add emojis here or something
					</Paragraph>
				</List>
			</section>
		</main>
	)
}

export default Home;