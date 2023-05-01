import ReservationCard from './components/ReservationCard';
import RestaurantNavbar from './components/RestaurantNavbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<header className="h-96 overflow-hidden">
				<div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
					<h1 className="text-7xl text-white captitalize text-shadow text-center">Milestones Grill (Toronto)</h1>
				</div>
			</header>
			<article className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
				<div className="bg-white w-[70%] rounded p-3 shadow">
					<RestaurantNavbar />
					{children}
				</div>
				<ReservationCard />
			</article>
		</>
	);
}
