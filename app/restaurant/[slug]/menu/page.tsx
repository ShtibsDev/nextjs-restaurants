import Link from 'next/link';
import { FC } from 'react';
import RestaurantNavbar from '../components/RestaurantNavbar';
import MenuCard from '../components/MenuCard';

type MenuPageProps = {};

const MenuPage: FC<MenuPageProps> = ({}) => {
	return (
		<>
			<header className="h-96 overflow-hidden">
				<div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
					<h1 className="text-7xl text-white captitalize text-shadow text-center">Milestones Grill (Toronto)</h1>
				</div>
			</header>
			<article className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
				<div className="bg-white w-[100%] rounded p-3 shadow">
					<RestaurantNavbar />
					<section className="menu bg-white mt-5">
						<h2 className="font-bold mt-4 pb-1 mb-1 text-4xl">Menu</h2>
						<div className="flex flex-wrap justify-between">
							<MenuCard />
						</div>
					</section>
				</div>
			</article>
		</>
	);
};

export default MenuPage;
