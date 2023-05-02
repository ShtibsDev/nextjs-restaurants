import { FC } from 'react';

type RestaurantsImagesProps = {
	images: string[];
};

const RestaurantsImages: FC<RestaurantsImagesProps> = ({ images }) => {
	return (
		<section className="images">
			<h3 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
				{images.length} photo{images.length > 1 && 's'}
			</h3>
			<div className="flex flex-wrap">
				{images.map((image) => (
					<img className="w-56 h-44 mr-1 mb-1" src={image} alt="" />
				))}
			</div>
		</section>
	);
};

export default RestaurantsImages;
