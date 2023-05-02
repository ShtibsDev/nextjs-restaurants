import RatingStars from '@/app/components/RatingStars';
import { Review, User } from '@prisma/client';
import { FC } from 'react';

type ReviewCardProps = {
	review: Review & {
		user: User;
	};
};

const ReviewCard: FC<ReviewCardProps> = ({ review }) => {
	return (
		<div className="border-b pb-7 mb-7 flex">
			<div className="w-1/6 flex flex-col items-center">
				<strong className="rounded-full uppercase bg-blue-400 w-16 h-16 flex items-center justify-center text-white text-2xl">
					{review.user.firstName[0]}
					{review.user.lastName[0]}
				</strong>
				<strong className="text-center">
					{review.user.firstName} {review.user.lastName}
				</strong>
			</div>
			<div className="ml-10 w-5/6">
				<RatingStars className="mr-5" rating={review.rating} />
				<p className="text-lg font-light mt-5">{review.text}</p>
			</div>
		</div>
	);
};

export default ReviewCard;
