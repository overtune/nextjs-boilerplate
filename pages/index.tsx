import Head from 'next/head';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-2">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center flex-1 py-20">
				<h1 className="mb-6 text-6xl font-bold">
					Welcome to{' '}
					<a
						href="https://nextjs.org"
						className="text-blue-600 hover:underline"
					>
						Next.js!
					</a>
				</h1>

				<p className="text-2xl text-center">
					Get started by editing{' '}
					<code className="p-3 text-base bg-gray-100 rounded">
						pages/index.js
					</code>
				</p>

				<div className="max-w-3xl mt-20 grid grid-flow-col grid-cols-2 transition-colors grid-rows-2">
					<a
						href="https://nextjs.org/docs"
						className="inline-block p-6 m-4 text-left border border-gray-200 rounded-lg transition-colors hover:border-blue-600 group"
					>
						<h2 className="mb-4 text-2xl font-bold transition-colors group-hover:text-blue-600">
							Documentation &rarr;
						</h2>
						<p className="text-xl">
							Find in-depth information about Next.js features and
							API.
						</p>
					</a>

					<a
						href="https://nextjs.org/learn"
						className="inline-block p-6 m-4 text-left border border-gray-200 rounded-lg transition-colors hover:border-blue-600 group"
					>
						<h2 className="mb-4 text-2xl font-bold transition-colors group-hover:text-blue-600">
							Learn &rarr;
						</h2>
						<p className="text-xl">
							Learn about Next.js in an interactive course with
							quizzes!
						</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/master/examples"
						className="inline-block p-6 m-4 text-left border border-gray-200 rounded-lg transition-colors hover:border-blue-600 group"
					>
						<h2 className="mb-4 text-2xl font-bold transition-colors group-hover:text-blue-600">
							Examples &rarr;
						</h2>
						<p className="text-xl">
							Discover and deploy boilerplate example Next.js
							projects.
						</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className="inline-block p-6 m-4 text-left border border-gray-200 rounded-lg transition-colors hover:border-blue-600 group"
					>
						<h2 className="mb-4 text-2xl font-bold transition-colors group-hover:text-blue-600">
							Deploy &rarr;
						</h2>
						<p className="text-xl">
							Instantly deploy your Next.js site to a public URL
							with Vercel.
						</p>
					</a>
				</div>
			</main>
		</div>
	);
}
