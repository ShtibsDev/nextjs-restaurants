import { Item } from '@prisma/client';
import { FC } from 'react';

type MenuCardProps = {
	menuItem: Item;
};

const MenuItemCard: FC<MenuCardProps> = ({ menuItem }) => {
	const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(menuItem.price);

	return (
		<div className=" border rounded p-3 w-[49%] mb-3">
			<h3 className="font-bold text-lg">{menuItem.name}</h3>
			<p className="font-light mt-1 text-sm">{menuItem.description}</p>
			<p className="mt-7">{price}</p>
		</div>
	);
};

export default MenuItemCard;
