import SearchBar from '../components/SearchBar';
import SideBar from './components/SideBar';
import SearchResultCard from './components/SearchResult';
import { metadata } from '../layout';
import { PRICE } from '@prisma/client';
import prisma from '../utils/prisma';

export type SearchPageProps = {
	searchParams: { location?: string; cuisine?: string; price?: PRICE };
};

async function fetchSearchResults(searchParams: { location?: string; cuisine?: string; price?: PRICE }) {
	const results = await prisma.restaurant.findMany({
		where: {
			location: searchParams.location ? { name: { startsWith: searchParams.location.toLowerCase() } } : {},
			cuisine: searchParams.cuisine ? { name: { equals: searchParams.cuisine.toLowerCase() } } : {},
			price: searchParams.price ? { equals: searchParams.price } : {},
		},
		select: {
			id: true,
			name: true,
			price: true,
			cuisine: true,
			location: true,
			main_image: true,
			slug: true,
			reviews: {
				select: {
					id: true,
					rating: true,
					user: true,
				},
			},
		},
	});

	return results;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
	metadata.title = 'OpenTable | Search';

	const results = await fetchSearchResults(searchParams);

	return (
		<>
			<header className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
				<SearchBar />
			</header>
			<article className="flex py-4 m-auto w-2/3 justify-between items-start">
				{/* @ts-expect-error Server Component */}
				<SideBar searchParams={searchParams} />
				<section className="w-5/6">
					{results.length ? (
						results.map((result) => <SearchResultCard result={result} key={result.id} />)
					) : (
						<p>No results for: "{searchParams.location}"</p>
					)}
				</section>
			</article>
		</>
	);
}
