import { FC } from 'react';

type RatingsProps = {};

const Ratings: FC<RatingsProps> = ({}) => {
	return (
		<div className="ratings mt-2 flex items-center">
			<span>*****</span>
			<span className="text-reg ml-3">4.9</span>
			<span className="text-reg ml-4">600 Reviews</span>
		</div>
	);
};

export default Ratings;
