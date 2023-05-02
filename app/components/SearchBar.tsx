'use client';

import { useRouter } from 'next/navigation';
import { FC, FormEvent, useState } from 'react';

type SearchBarProps = {};

const SearchBar: FC<SearchBarProps> = ({}) => {
	const router = useRouter();
	const [location, setLocation] = useState('');

	const handleSearch = (e: FormEvent) => {
		e.preventDefault();
		if (location === '') return;

		router.push(`/search?location=${location}`);
	};
	return (
		<form className="text-left text-lg py-3 m-auto flex justify-center" onSubmit={handleSearch}>
			<input
				value={location}
				className="rounded mr-3 p-2 w-[450px]"
				type="search"
				placeholder="State, city or town"
				onChange={(e) => setLocation(e.target.value)}
			/>
			<button type="submit" className="rounded bg-red-600 px-9 py-2 text-white">
				Let's go
			</button>
		</form>
	);
};

export default SearchBar;
