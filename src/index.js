import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { QueryClientProvider, QueryClient } from 'react-query';

// Containers
import App from 'containers/App';
import Renders from 'containers/Renders'

// Load external CSS deps
import '@dracula/dracula-ui/styles/dracula-ui.css';

// App specific CSS
import 'styles/index.scss';

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<header>header</header>
			<App />
			<Renders />
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
