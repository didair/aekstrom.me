import { Router } from 'moonly';
import { initTheme } from './theme';
import MainLayout from './pages/_MainLayout';

import HomePage from './pages/Home';

import './styles.css';

const router = new Router({
	pages: [
		HomePage,
	],
	defaultLayout: MainLayout,
});

initTheme();

router.render();