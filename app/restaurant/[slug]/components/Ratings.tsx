import RatingStars from '@/app/components/RatingStars';
import { getRatingAverage } from '@/app/utils/helperFunctions';
import { FC } from 'react';

type RatingsProps = {
	reviews: { rating: number }[];
};

const Ratings: FC<RatingsProps> = ({ reviews }) => {
	const averageRating = getRatingAverage(reviews);
	return (
		<div className="ratings mt-2 flex items-center">
			<RatingStars rating={averageRating} />
			<span className="text-reg ml-3">{averageRating.toFixed(1)}</span>
			<span className="text-reg ml-4">
				{reviews.length} Review{reviews.length !== 1 && 's'}
			</span>
		</div>
	);
};

export default Ratings;
