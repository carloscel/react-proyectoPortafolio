import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

//para instalar: npm install -g json-server
//Para correr: json-server --watch db.json -p 3001 
//o tmb este: json-server --watch db.json
