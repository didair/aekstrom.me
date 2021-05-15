import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// Containers
import App from 'containers/App';

// Load external CSS deps
import '@dracula/dracula-ui/styles/dracula-ui.css';

// App specific CSS
import 'styles/index.scss';
import 'styles/site.scss';

ReactDOM.render(
	<React.StrictMode>
		<header>header</header>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
