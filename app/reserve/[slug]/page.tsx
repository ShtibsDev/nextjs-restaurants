import Link from 'next/link';
import { FC } from 'react';
import ReservationForm from './components/ReservationForm';

type ReservationPageProps = {};

const ReservationPage: FC<ReservationPageProps> = ({}) => {
	return (
		<>
			<div className="border-t h-screen py-9 w-3/5 m-auto">
				<header>
					<strong className="font-bold">You're almost done!</strong>
					<div className="mt-5 flex">
						<img src="https://images.otstatic.com/prod1/49153814/2/medium.jpg" alt="" className="w-32 h-18 rounded" />
						<div className="ml-4">
							<h1 className="text-3xl font-bold">Aiāna Restaurant Collective</h1>
							<div className="flex mt-3">
								<span className="mr-6">Tues, 22, 2023</span>
								<span className="mr-6">7:30 PM</span>
								<span className="mr-6">3 people</span>
							</div>
						</div>
					</div>
				</header>
				<ReservationForm />
			</div>
		</>
	);
};

export default ReservationPage;
