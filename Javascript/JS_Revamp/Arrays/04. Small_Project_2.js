const ratings = [8.5, 9.2, 6.4, 4.8, 7.9, 3.2, 5.6, 9.8]; // Ratings out of 10
const maxRating = 10;

// convert rating into percentage
const ratingPercentage = ratings.map((eachRatingWithPercentage) =>
	((eachRatingWithPercentage * 100) / maxRating).toFixed(0)
);

console.log("Rating to %: ", ratingPercentage);

// filter rating which is above 50%

const ratingAbove50 = ratingPercentage.filter((eachRating) => eachRating >= 50);
console.log("Rating to 50%: ", ratingAbove50);

// total number of counts above 70%
const ratingAbove70 = ratingAbove50.filter(
	(eachRating) => eachRating >= 70
).length;

// total rating

const totalRating = ratings.reduce(
	(presentVal, nextVal) => presentVal + nextVal,
	0
);

console.log("Total Rating Percentage %: ", totalRating);
console.log("Total Rating Above 70%", ratingAbove70);
