import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { LayoutContainer } from 'components/Layout/LayoutContainer';

interface Props {
	data: any;
}

const CmsPage: React.FC<Props> = ({ data }) => {
	return (
		<>
			<Head>
				<title>Episerver integration demo</title>
			</Head>
			<LayoutContainer>
				<pre>
					<code className="block h-screen p-4 overflow-x-scroll whitespace-pre bg-gray-100">
						{JSON.stringify(data, null, '\t')}
					</code>
				</pre>
			</LayoutContainer>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async context => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps = async context => {
	let slug = context?.params?.slug;
	slug = Array.isArray(slug) ? slug.join('/') : slug;
	if (!slug) {
		slug = 'index';
	}

	const url = `${process.env.NEXT_PUBLIC_EPI_API_HOST}/${slug}.json`;

	const res = await fetch(url);
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
};

export default CmsPage;
