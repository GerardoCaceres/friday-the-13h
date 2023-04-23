import './index.scss';
import { Format, Link } from '../Icons';
import React from 'react';

export const Toolbar = ({ onFormat, onGenerateLink }) => {
	return (
		<div className="toolbar">
			<div className="toolbar__format" onClick={onFormat}>
				<Format />
			</div>
			<div className="toolbar__link" onClick={onGenerateLink}>
				<Link />
			</div>
		</div>
	);
};
