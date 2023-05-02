'use client';

import errorImage from '@/icons/error.png';
import Image from 'next/image';

const NotFound = ({ error }: { error: Error }) => {
	return (
		<div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
			<Image src={errorImage} alt="Error" className="w-56 mb-8" />
			<div className="bg-white p-9 py-14 shadow rounded">
				<h3 className="text-3xl font-bold">The Page you were looking for was not found</h3>
				<p className="text-reg font-bold">status code 404</p>
			</div>
		</div>
	);
};

export default NotFound;
