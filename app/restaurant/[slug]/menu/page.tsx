import prisma from '@/utils/prisma';
import MenuItemCard from '../components/MenuCard';
import { notFound } from 'next/navigation';

type MenuPageProps = {
	params: {
		slug: string;
	};
};

const fetchMenuItems = async (slug: string) => {
	const restaurant = await prisma.restaurant.findUnique({ where: { slug }, select: { items: true } });

	if (!restaurant) notFound();
	return restaurant.items;
};

export default async function MenuPage({ params }: MenuPageProps) {
	const menuItems = await fetchMenuItems(params.slug);

	return (
		<section className="menu bg-white mt-5">
			<h2 className="font-bold mt-4 pb-1 mb-1 text-4xl">Menu</h2>
			<div className="flex flex-wrap justify-between">
				{menuItems?.length ? menuItems?.map((item) => <MenuItemCard menuItem={item} />) : <p>This restaurant doesn't have a menu.</p>}
			</div>
		</section>
	);
}
