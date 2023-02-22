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
							<span className="emoji">
								👋🏼
							</span>

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
						<span className="emoji">
							💼
						</span>

						Resumé
					</Heading>
				</div>

				<List variant="unordered" color="purple">
					<li className="drac-text drac-text-white">
						CO-Owner at <Anchor href="https://strollysweden.com/" isExternal>Strolly</Anchor>
					</li>

					<li className="drac-text drac-text-white">
						Frontend lead at <Anchor href="https://www.kb.se/" isExternal>KB</Anchor>
					</li>

					<li className="drac-text drac-text-white">
						Frontend lead at <Anchor href="https://haldor.se/" isExternal>Haldor</Anchor>
					</li>

					<li className="drac-text drac-text-white">
						Consultant at <Anchor href="https://atronstore.com/" isExternal>ATRON</Anchor>
					</li>

					<li className="drac-text drac-text-white">
						Contributor at <Anchor href="https://github.com/catppuccin/ui" isExternal>@catppuccin/ui</Anchor>
					</li>
				</List>
			</section>

			<section>
				<div className="mb-2">
					<Heading size="xl" color="cyanGreen">
						<span className="emoji">
							💁🏼‍♂️
						</span>

						About me
					</Heading>
				</div>

				<Paragraph>
					I'm a senior software developer from Sweden currently working as a consultant for <Anchor href="https://one-group.se/" isExternal>One Group AB</Anchor>.
					<br /><br />
					Total mechanical keyboard nut, Blender hobbyist & open-source advocate.
					<br />
					Always working on something cool!
				</Paragraph>
			</section>

			<section>
				<div className="mb-2">
					<Heading size="xl" color="cyanGreen">
						<span className="emoji">
							💬
						</span>

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
						<span className="tdt">
							TODO: Add emojis here or something // done!
						</span>
					</Paragraph>
				</List>

				<span className="hidden">Im a whore for hire. Call me @ +46 73-962 00 11 or come to my mothers house @ Kälkbacksvägen 1.</span>
			</section>
		</main>
	)
}

export default Home;