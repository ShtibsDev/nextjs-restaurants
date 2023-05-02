import RatingStars from '@/app/components/RatingStars';
import { getRatingAverage, getRatingSummary } from '@/app/utils/helperFunctions';
import Price from '@/components/Price';
import { Cuisine, Location, PRICE, User } from '@prisma/client';
import Link from 'next/link';
import { FC } from 'react';

type SearchResultProps = {
	result: {
		id: number;
		name: string;
		price: PRICE;
		cuisine: Cuisine;
		location: Location;
		main_image: string;
		slug: string;
		reviews: {
			user: User;
			id: number;
			rating: number;
		}[];
	};
};

const SearchResultCard: FC<SearchResultProps> = ({ result }) => {
	const averageRating = getRatingAverage(result.reviews);

	return (
		<section className="border-b flex pb-5">
			<img src={result.main_image} alt="" className="w-44 h-36 rounded" />
			<div className="pl-5">
				<h2 className="text-3xl">{result.name}</h2>
				<div className="flex items-start">
					<RatingStars className="mb-2" rating={averageRating} />
					<span className="ml-2 text-sm">{getRatingSummary(averageRating)}</span>
				</div>
				<div className="mb-9">
					<div className="font-light flex text-reg">
						<span className="mr-4">
							<Price price={result.price} />
						</span>
						<span className="mr-4 capitalize">{result.cuisine.name}</span>
						<span className="mr-4 capitalize">{result.location.name}</span>
					</div>
				</div>
				<Link className="text-red-600" href={`/restaurant/${result.slug}`}>
					View more information
				</Link>
			</div>
		</section>
	);
};

export default SearchResultCard;
