import fullStar from '@/icons/full-star.png';
import halfStar from '@/icons/half-star.png';
import emptyStar from '@/icons/empty-star.png';
import Image, { StaticImageData } from 'next/image';

const RatingStars = ({ rating, className }: { rating: number; className?: string }) => {
	const precision = rating % 1 === 0 ? 1 : 2;
	const starAmount = `${rating.toPrecision(precision)} star${rating > 1 ? 's' : ''}`;

	const stars: StaticImageData[] = [];

	for (let i = 0; i < 5; i++) {
		const diff = parseFloat((rating - i).toFixed(1));
		stars.push(getStarType(diff));
	}

	return (
		<span title={starAmount} aria-label={starAmount} className={`flex gap-x-0.5 ${className ?? ''}`}>
			{stars.map((star) => (
				<Image src={star} className="w-5 h-5" alt="star" />
			))}
		</span>
	);
};

export default RatingStars;

function getStarType(difference: number) {
	if (difference >= 1) return fullStar;
	if (difference <= 0) return emptyStar;

	if (difference <= 0.2) return emptyStar;
	if (difference > 0.2 && difference <= 0.6) return halfStar;
	return fullStar;
}
