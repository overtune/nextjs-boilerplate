import { rest } from 'msw';

export const handlers = [
	// We need an absolute address to use mock when using getServerSideProps
	// rest.get('http://localhost:3000/api/hello', (req, res, ctx) => {
	// 	return res(
	// 		ctx.json({
	// 			name: 'Mock John Doe',
	// 		})
	// 	);
	// }),
];
