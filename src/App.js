import { Toolbar } from './components/Toolbar';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import AceEditor from 'react-ace';

import './App.scss';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/webpack-resolver';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	const [data, setData] = useState('');
	const [error, setError] = useState(false);


	const handleFormat = () => {
		if (!error) setData((x) => JSON.stringify(JSON.parse(x), null, 2));
	};

	const handleGenerateLink = () => {
		const url = `${window.location.origin}${window.location.pathname}?q=${encodeURIComponent(data)}`;
		navigator.clipboard.writeText(url);
		toast.success('Se copio la url en el clipboard');
	};

	const handleChange = (value) => {
		setData(value);
	};

	const handleValidate = (errors) => {
		if (errors.length) setError(true);
		else setError(false);
	};

	useEffect(() => {
		const url = new URL(window.location.href);
		const query = url.searchParams.get('q');
		const last = localStorage.getItem('last');

		if (query) setData(decodeURIComponent(query));
		else if (last) setData(last);
	}, []);

	useEffect(() => {
		return () => {
			if (data) localStorage.setItem('last', data);
		};
	}, [data]);

	return (
		<div className="App">
			<AceEditor
				value={data}
				mode="json"
				theme="monokai"
				name="UNIQUE_ID_OF_DIV"
				editorProps={{ $blockScrolling: true }}
				width="100%"
				height="100%"
				tabSize={2}
				onChange={handleChange}
				onValidate={handleValidate}
				showPrintMargin={false}
			/>
			<Toolbar
				onFormat={handleFormat}
				onGenerateLink={handleGenerateLink}
			/>
			<ToastContainer theme="dark" />
		</div>
	);
};

export default App;
