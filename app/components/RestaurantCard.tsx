import { Cuisine, Location, PRICE, User } from '@prisma/client';
import Link from 'next/link';
import { FC } from 'react';
import Price from './Price';
import { getRatingAverage } from '../utils/helperFunctions';
import RatingStars from './RatingStars';

type RestaurantCardProps = {
	restaurant: {
		id: number;
		name: string;
		price: PRICE;
		main_image: string;
		cuisine: Cuisine;
		slug: string;
		location: Location;
		reviews: {
			user: User;
			id: number;
			rating: number;
		}[];
	};
};

const RestaurantCard: FC<RestaurantCardProps> = ({ restaurant }) => {
	const averageRating = getRatingAverage(restaurant.reviews);

	return (
		<Link href={`/restaurant/${restaurant.slug}`} className="w-64 h-72  rounded overflow-hidden border cursor-pointer">
			<img src={restaurant.main_image} alt="" className="w-full h-36" />
			<div className="p-1">
				<h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
				<div className="flex items-start">
					<RatingStars className="mb-2" rating={averageRating} />
					<span className="ml-2">
						{restaurant.reviews.length} review{restaurant.reviews.length > 1 && 's'}
					</span>
				</div>
				<div className="flex text-reg font-light capitalize">
					<span className=" mr-3">{restaurant.cuisine.name}</span>
					<span className="mr-3">
						<Price price={restaurant.price} />
					</span>
					<span>{restaurant.location.name}</span>
				</div>
				<span className="text-sm mt-1 font-bold">Booked 3 times today</span>
			</div>
		</Link>
	);
};

export default RestaurantCard;
