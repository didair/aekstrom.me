import { signal } from "moonly";

const currentTheme = signal('');

export const initTheme = () => {
	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		document.documentElement.classList.add('dark');
		currentTheme.value = 'dark';
	} else {
		document.documentElement.classList.remove('dark');
		currentTheme.value = 'light';
	}
};

export const toggleTheme = () => {
	if (document.documentElement.classList.contains('dark')) {
		localStorage.setItem('theme', 'light');
	} else {
		localStorage.setItem('theme', 'dark');
	}

	initTheme();
};

export const getCurrentTheme = () => {
	return currentTheme;
};
