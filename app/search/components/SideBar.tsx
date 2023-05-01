import { FC } from 'react';

type SideBarProps = {};

const SideBar: FC<SideBarProps> = ({}) => {
	return (
		<aside className="w-1/5">
			<section className="border-b pb-4">
				<h3 className="mb-2">Region</h3>
				<p className="font-light text-reg">Toronto</p>
				<p className="font-light text-reg">Ottawa</p>
				<p className="font-light text-reg">Montreal</p>
				<p className="font-light text-reg">Hamilton</p>
				<p className="font-light text-reg">Kingston</p>
				<p className="font-light text-reg">Niagara</p>
			</section>
			<section className="border-b pb-4 mt-3">
				<h3 className="mb-2">Cuisine</h3>
				<p className="font-light text-reg">Mexican</p>
				<p className="font-light text-reg">Italian</p>
				<p className="font-light text-reg">Chinese</p>
			</section>
			<section className="mt-3 pb-4">
				<h3 className="mb-2">Price</h3>
				<div className="flex">
					<button className="border w-full text-reg font-light rounded-l p-2">$</button>
					<button className="border-r border-t border-b w-full text-reg font-light p-2">$$</button>
					<button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">$$$</button>
				</div>
			</section>
		</aside>
	);
};

export default SideBar;
