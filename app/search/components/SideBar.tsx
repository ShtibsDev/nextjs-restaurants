import { PRICE } from '@prisma/client';
import Link from 'next/link';
import { SearchPageProps } from '../page';
import prisma from '@/utils/prisma';

async function fetchRegions() {
	return await prisma.location.findMany();
}

async function fetchCuisines() {
	return await prisma.cuisine.findMany();
}

async function SideBar({ searchParams }: SearchPageProps) {
	const [regions, cuisines] = await Promise.all([fetchRegions(), fetchCuisines()]);
	return (
		<aside className="w-1/5">
			<section className="border-b pb-4">
				<h3 className="mb-2">Region</h3>
				{regions.map((region) => (
					<Link
						href={{ pathname: '/search', query: { ...searchParams, location: region.name } }}
						key={region.id}
						className="font-light block capitalize text-reg hover:underline">
						{region.name}
					</Link>
				))}
			</section>
			<section className="border-b pb-4 mt-3">
				<h3 className="mb-2">Cuisine</h3>
				{cuisines.map((cuisine) => (
					<Link
						href={{ pathname: '/search', query: { ...searchParams, cuisine: cuisine.name } }}
						key={cuisine.id}
						className="font-light block capitalize text-reg hover:underline">
						{cuisine.name}
					</Link>
				))}
			</section>
			<section className="mt-3 pb-4">
				<h3 className="mb-2">Price</h3>
				<div className="flex flex-wrap justify-center gap-1">
					<Link
						href={{ pathname: '/search', query: { ...searchParams, price: PRICE.CHEAP } }}
						className="border w-14 text-reg text-center font-light rounded p-2">
						$
					</Link>
					<Link
						href={{ pathname: '/search', query: { ...searchParams, price: PRICE.REGULAR } }}
						className="border w-14 text-reg text-center font-light rounded p-2">
						$$
					</Link>{' '}
					<Link
						href={{ pathname: '/search', query: { ...searchParams, price: PRICE.EXPENSIVE } }}
						className="border w-14 text-reg text-center font-light rounded p-2">
						$$$
					</Link>{' '}
					<Link
						href={{ pathname: '/search', query: { ...searchParams, price: PRICE.VERY_EXPENSIVE } }}
						className="border w-14 text-reg text-center font-light rounded p-2">
						$$$$
					</Link>
				</div>
			</section>
		</aside>
	);
}

export default SideBar;
