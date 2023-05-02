'use client';

import errorImage from '@/icons/error.png';
import Image from 'next/image';

const Error = ({ error }: { error: Error }) => {
	return (
		<div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
			<Image src={errorImage} alt="Error" className="w-56 mb-8" />
			<div className="bg-white p-9 py-14 shadow rounded">
				<h3 className="text-3xl font-bold">An error has accrued</h3>
				<p className="text-reg font-bold">{error.message}</p>
			</div>
		</div>
	);
};

export default Error;
