import MenuItemCard from '../components/MenuCard';
import { PrismaClient } from '@prisma/client';

type MenuPageProps = {
	params: {
		slug: string;
	};
};

const prisma = new PrismaClient();

const fetchMenuItems = async (slug: string) => {
	const restaurant = await prisma.restaurant.findUnique({ where: { slug }, select: { items: true } });
	return restaurant?.items;
};

export default async function MenuPage({ params }: MenuPageProps) {
	const menuItems = await fetchMenuItems(params.slug);

	return (
		<section className="menu bg-white mt-5">
			<h2 className="font-bold mt-4 pb-1 mb-1 text-4xl">Menu</h2>
			<div className="flex flex-wrap justify-between">
				{menuItems?.map((item) => (
					<MenuItemCard menuItem={item} />
				))}
			</div>
		</section>
	);
}
