import React from 'react';
import { render } from 'react-dom';
import { App } from './app';

document.addEventListener('DOMContentLoaded', function () {
	const el = document.getElementById('root');
	el ? render(<App />, el) : '';
});
