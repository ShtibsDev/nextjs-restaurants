import { metadata } from '@/app/layout';
import ReservationCard from './components/ReservationCard';
import RestaurantNavbar from './components/RestaurantNavbar';

type RestaurantLayoutProps = {
	children: React.ReactNode;
	params: {
		slug: string;
	};
};

const renderTitle = (slug: string) => {
	const nameArray = slug.split('-').map((x) => `${x.charAt(0).toUpperCase()}${x.slice(1)}`);

	nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`;

	return nameArray.join(' ');
};

export default async function RestaurantLayout({ children, params }: RestaurantLayoutProps) {
	const title = renderTitle(params.slug);

	metadata.title = `OpenTable | ${title}`;

	return (
		<>
			<header className="h-96 overflow-hidden">
				<div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
					<h1 className="text-7xl text-white capitalize text-shadow text-center">{title}</h1>
				</div>
			</header>
			<article className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
				<div className="bg-white w-[70%] rounded p-3 shadow">
					<RestaurantNavbar slug={params.slug} />
					{children}
				</div>
				<ReservationCard />
			</article>
		</>
	);
}
