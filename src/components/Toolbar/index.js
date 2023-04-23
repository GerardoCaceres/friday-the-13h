import React from 'react';
import { Format, Json, Link } from '../Icons';

import './index.scss';

export const Toolbar = ({ onFormat, onGenerateLink }) => {
	return (
		<div className="toolbar">
			<div className="toolbar__json-mask">
				<Json />
			</div>
			<div className="toolbar__button toolbar__format" onClick={onFormat}>
				<Format />
			</div>
			<div className="toolbar__button toolbar__link" onClick={onGenerateLink}>
				<Link />
			</div>
		</div>
	);
};
