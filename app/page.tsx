import RestaurantCard from './components/RestaurantCard';
import SearchBar from './components/SearchBar';

export default function Home() {
	return (
		<>
			<header className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2 text-center ">
				<h1 className="text-white text-5xl font-bold mb-2 mt-10">Find your table for any occasion</h1>
				<SearchBar />
			</header>
			<section className="py-3 px-36 mt-10 flex flex-wrap justify-center">
				<RestaurantCard />
			</section>
		</>
	);
}
