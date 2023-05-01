'use client';

import { FC } from 'react';

type ReservationCardProps = {};

const ReservationCard: FC<ReservationCardProps> = ({}) => {
	return (
		<div className="w-[27%] relative text-reg">
			<div className="fixed w-[15%] bg-white rounded p-3 shadow">
				<h4 className="text-center border-b pb-2 font-bold mr-7 text-lg">Make a Reservation</h4>
				<div className="my-3 flex flex-col">
					<label htmlFor="party-size">Party size</label>
					<select name="" className="py-3 border-b font-light" id="party-size">
						<option value="">1 person</option>
						<option value="">2 people</option>
					</select>
				</div>
				<div className="flex justify-between">
					<div className="flex flex-col w-[48%]">
						<label htmlFor="date">Date</label>
						<input id="date" type="text" className="py-3 border-b font-light w-28" />
					</div>
					<div className="flex flex-col w-[48%]">
						<label htmlFor="time">Time</label>
						<select name="" id="time" className="py-3 border-b font-light">
							<option value="">7:30 AM</option>
							<option value="">9:30 AM</option>
						</select>
					</div>
				</div>
				<button className="mt-5 bg-red-600 rounded w-full px-4 text-white font-bold h-16">Find a Time</button>
			</div>
		</div>
	);
};

export default ReservationCard;
