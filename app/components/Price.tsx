import { PRICE } from '@prisma/client';

export default function Price({ price }: { price: PRICE }) {
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
