import Link from 'next/link';
import { FC } from 'react';
import RestaurantNavbar from './components/RestaurantNavbar';
import Ratings from './components/Ratings';
import ReviewCard from './components/ReviewCard';
import ReservationCard from './components/ReservationCard';
import RestaurantsImages from './components/RestaurantsImages';

type RestaurantDetailsPageProps = {};

const RestaurantDetailsPage: FC<RestaurantDetailsPageProps> = ({}) => {
	return (
		<>
			<h2 className="font-bold text-6xl mt-4 border-b pb-6">Milesstone Grill</h2>
			<Ratings />
			<p className="text-lg font-light mt-4">
				The classics you love prepared with a perfect twist, all served up in an atmosphere that feels just right. That’s the Milestones promise. So,
				whether you’re celebrating a milestone, making the most of Happy Hour or enjoying brunch with friends, you can be sure that every Milestones
				experience is a simple and perfectly memorable one.
			</p>
			<RestaurantsImages />
			<section className="reviews">
				<h3 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">What 100 people are saying</h3>
				<ReviewCard />
			</section>
		</>
	);
};

export default RestaurantDetailsPage;
