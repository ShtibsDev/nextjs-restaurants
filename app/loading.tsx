import SearchBar from './components/SearchBar';

const loading = () => {
	return (
		<>
			<header className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2 text-center ">
				<h1 className="text-white text-5xl font-bold mb-2 mt-10">Find your table for any occasion</h1>
				<SearchBar />
			</header>
			<section className="py-3 px-36 mt-10 flex flex-wrap justify-center gap-[24px]">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
					<div key={num} className="animate-pulse bg-slate-200 w-64 h-72 rounded overflow-hidden border cursor-pointer" />
				))}
			</section>
		</>
	);
};

export default loading;
