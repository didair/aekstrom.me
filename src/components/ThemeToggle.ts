import { Box, Text } from "moonly";
import { toggleTheme } from "../theme";

export const ThemeToggle = () => {
	return Box({
		class: "w-8 h-5 border border-purple-950 dark:border-yellow-300 rounded-full flex items-center",
		style: "padding: 2px;",
		events: {
			click: toggleTheme,
		},
		children: [
			Text({
				class: 'pill h-full aspect-square ratio inline-block bg-purple-950 dark:bg-yellow-300 rounded-full transition-all duration-300',
			}),
		],
	});
};
