import Ratings from './components/Ratings';
import ReviewCard from './components/ReviewCard';
import RestaurantsImages from './components/RestaurantsImages';
import { PrismaClient } from '@prisma/client';

type RestaurantDetailsPageProps = {
	params: {
		slug: string;
	};
};

const prisma = new PrismaClient();

const fetchRestaurant = async (slug: string) => {
	const restaurant = await prisma.restaurant.findUnique({ where: { slug } });
	return restaurant;
};

export default async function RestaurantDetailsPage({ params }: RestaurantDetailsPageProps) {
	const restaurant = await fetchRestaurant(params.slug);

	return (
		<>
			<h2 className="font-bold text-6xl mt-4 border-b pb-6">{restaurant?.name}</h2>
			<Ratings />
			<p className="text-lg font-light mt-4">{restaurant?.description}</p>
			<RestaurantsImages images={restaurant?.images ?? []} />
			<section className="reviews">
				<h3 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">What 100 people are saying</h3>
				<ReviewCard />
			</section>
		</>
	);
}
