import SearchBar from '../components/SearchBar';
import SideBar from './components/SideBar';
import SearchResultCard from './components/SearchResult';

const SearchPage = () => {
	return (
		<>
			<header className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
				<SearchBar />
			</header>
			<article className="flex py-4 m-auto w-2/3 justify-between items-start">
				<SideBar />
				<section className="w-5/6">
					<SearchResultCard />
				</section>
			</article>
		</>
	);
};

export default SearchPage;
