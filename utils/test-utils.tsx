/**
 * Testing utils
 * Some extentions for React testing library.
 * https://testing-library.com/docs/react-testing-library/setup#custom-render
 * https://github.com/kentcdodds/react-testing-library-course/blob/tjs/src/__tests__/redux-03.js
 * https://github.com/kentcdodds/react-testing-library-course/blob/tjs/src/__tests__/react-router-03.js
 */

import React from 'react';
import { renderToString as reactDomRenderToString } from 'react-dom/server';
import { render } from '@testing-library/react';

interface Options {
	route?: string;
	history?: any;
}

const customRender = (
	ui: any,
	{
		route = '/',
		...renderOptions
	}: Options = {}
) => {
	const AllTheProviders: React.FC = ({ children }) => {
		// return <Router history={history}>{children}</Router>;
		return <>children</>;
	};
	return {
		...render(ui, {
			wrapper: AllTheProviders,
			...renderOptions,
		}),
		history,
	};
};

const renderToString = (component: any) => {
	const AllTheProviders: React.FC = ({ children }) => {
		return <>{children}</>;
		// return <Router history={history}>{children}</Router>;
	};

	return reactDomRenderToString(<AllTheProviders>{component}</AllTheProviders>);
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render, renderToString };
