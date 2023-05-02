import Ratings from './components/Ratings';
import ReviewCard from './components/ReviewCard';
import RestaurantsImages from './components/RestaurantsImages';
import prisma from '@/utils/prisma';
import { sleep } from '@/app/utils/helperFunctions';
import { notFound } from 'next/navigation';

type RestaurantDetailsPageProps = {
	params: {
		slug: string;
	};
};

async function fetchRestaurant(slug: string) {
	const restaurant = await prisma.restaurant.findUnique({ where: { slug }, include: { reviews: { include: { user: true } } } });

	if (!restaurant) notFound();
	return restaurant;
}

export default async function RestaurantDetailsPage({ params }: RestaurantDetailsPageProps) {
	const restaurant = await fetchRestaurant(params.slug);

	return (
		<>
			<h2 className="font-bold text-6xl mt-4 border-b pb-6">{restaurant?.name}</h2>
			<Ratings reviews={restaurant.reviews} />
			<p className="text-lg font-light mt-4">{restaurant?.description}</p>
			<RestaurantsImages images={restaurant?.images ?? []} />
			<section className="reviews">
				{restaurant?.reviews.length ? (
					<>
						<h3 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
							What {restaurant.reviews.length} {restaurant.reviews.length > 1 ? 'people are' : 'person is'} saying
						</h3>
						{restaurant.reviews.map((review) => (
							<ReviewCard review={review} />
						))}
					</>
				) : (
					<h3 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">No reviews for this restaurant</h3>
				)}
			</section>
		</>
	);
}
