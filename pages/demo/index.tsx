
import Head from 'next/head';

export default function Demo() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-2">
			<Head>
				<title>Demos</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center flex-1 py-20">
				<h1 className="mb-6 text-6xl font-bold">
					Demos
				</h1>

				<div className="max-w-3xl mt-20 grid grid-flow-col grid-cols-2 transition-colors grid-rows-2">
					<a
						href="/demo/epi"
						className="inline-block p-6 m-4 text-left border border-gray-200 rounded-lg transition-colors hover:border-blue-600 group"
					>
						<h2 className="mb-4 text-2xl font-bold transition-colors group-hover:text-blue-600">
							Episerver	
						</h2>
						<p className="text-xl">
							Demo of integrating with Episerver.
						</p>
					</a>
				</div>
			</main>
		</div>
	);
}
