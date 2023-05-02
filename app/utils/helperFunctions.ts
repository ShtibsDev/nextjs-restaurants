export function getRatingAverage(reviews: { rating: number }[]) {
	return reviews.length ? reviews.map((r) => r.rating).reduce((a, b) => a + b, 0) / reviews.length : 0;
}

export function getRatingSummary(rating: number) {
	if (rating > 4.5) return 'Awesome';
	if (rating > 3.5) return 'Ok';
	if (rating > 2.5) return 'Mediocre';
	if (rating > 1.5) return 'Bad';
	if (rating > 0) return 'Horrible';
	return 'No reviews yet';
}

export async function sleep(ms: number) {
	await new Promise((resolve) => setTimeout(resolve, ms));
}
