import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter as Router } from "react-router-dom";

// Containers
import App from 'containers/App';

// Load external CSS deps
import '@dracula/dracula-ui/styles/dracula-ui.css';

// App specific CSS
import 'styles/index.scss';

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
