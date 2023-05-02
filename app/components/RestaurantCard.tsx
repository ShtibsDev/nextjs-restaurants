import { Cuisine, Restaurant, Location, PRICE } from '@prisma/client';
import Link from 'next/link';
import { FC } from 'react';

type RestaurantCardProps = {
	restaurant: {
		id: number;
		name: string;
		price: PRICE;
		main_image: string;
		cuisine: Cuisine;
		slug: string;
		location: Location;
	};
};

const RestaurantCard: FC<RestaurantCardProps> = ({ restaurant }) => {
	const priceRating = getPriceRating(restaurant.price);

	return (
		<Link href={`/restaurant/${restaurant.slug}`} className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
			<img src={restaurant.main_image} alt="" className="w-full h-36" />
			<div className="p-1">
				<h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
				<div className="flex items-start">
					<span className="flex mb-2">*****</span>
					<span className="ml-2">77 reviews</span>
				</div>
				<div className="flex text-reg font-light capitalize">
					<span className=" mr-3">{restaurant.cuisine.name}</span>
					<span className="mr-3">{priceRating}</span>
					<span>{restaurant.location.name}</span>
				</div>
				<span className="text-sm mt-1 font-bold">Booked 3 times today</span>
			</div>
		</Link>
	);
};

function getPriceRating(price: PRICE) {
	switch (price) {
		case 'VERY_EXPENSIVE':
			return (
				<>
					<span className="font-extrabold">$$$$</span>
				</>
			);
		case 'EXPENSIVE':
			return (
				<>
					<span className="font-extrabold">$$$</span>
					<span className="font-extraLight text-gray-400">$</span>
				</>
			);
		case 'REGULAR':
			return (
				<>
					<span className="font-extrabold">$$</span>
					<span className="font-extraLight text-gray-400">$$</span>
				</>
			);
		case 'CHEAP':
		default:
			return (
				<>
					<span className="font-extrabold">$</span>
					<span className="font-extraLight text-gray-400">$$$</span>
				</>
			);
	}
}

export default RestaurantCard;
