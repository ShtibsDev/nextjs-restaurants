import { FC } from 'react';

type ReviewCardProps = {};

const ReviewCard: FC<ReviewCardProps> = ({}) => {
	return (
		<div className="border-b pb-7 mb-7 flex">
			<div className="w-1/6 flex flex-col items-center">
				<strong className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center text-white text-2xl">MJ</strong>
				<strong className="text-center">Micheal Jordan</strong>
			</div>
			<div className="ml-10 w-5/6">
				<span className="flex mr-5">*****</span>
				<p className="text-lg font-light mt-5">
					Laurie was on top of everything! Slow night due to the snow storm so it worked in our favor to have more one on one with the staff.
					Delicious and well worth the money.
				</p>
			</div>
		</div>
	);
};

export default ReviewCard;
