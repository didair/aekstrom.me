import { Box } from "moonly";
import { Header as HeaderElement } from "../elements/Header";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => [
	HeaderElement({
		class: 'fixed top-0 left-0 p-4 w-full flex items-center justify-between',
		children: [
			Box({
				class: 'font-bold',
				children: 'Andreas Ekström',
			}),
			ThemeToggle(),
		],
	}),
];

export default Header;
