import Link from 'next/link';
import { FC } from 'react';
import RestaurantNavbar from '../components/RestaurantNavbar';
import MenuCard from '../components/MenuCard';

type MenuPageProps = {};

const MenuPage: FC<MenuPageProps> = ({}) => {
	return (
		<section className="menu bg-white mt-5">
			<h2 className="font-bold mt-4 pb-1 mb-1 text-4xl">Menu</h2>
			<div className="flex flex-wrap justify-between">
				<MenuCard />
			</div>
		</section>
	);
};

export default MenuPage;
