import RestaurantCard from './components/RestaurantCard';
import SearchBar from './components/SearchBar';
import prisma from './utils/prisma';

const fetchRestaurants = async () => {
	const restaurants = await prisma.restaurant.findMany({
		select: {
			id: true,
			name: true,
			price: true,
			main_image: true,
			cuisine: true,
			slug: true,
			location: true,
			reviews: {
				select: {
					id: true,
					rating: true,
					user: true,
				},
			},
		},
	});
	return restaurants;
};

export default async function Home() {
	const restaurants = await fetchRestaurants();

	return (
		<>
			<header className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2 text-center ">
				<h1 className="text-white text-5xl font-bold mb-2 mt-10">Find your table for any occasion</h1>
				<SearchBar />
			</header>
			<section className="py-3 px-36 mt-10 flex flex-wrap justify-center gap-[24px]">
				{restaurants.map((r) => (
					<RestaurantCard restaurant={r} />
				))}
			</section>
		</>
	);
}
