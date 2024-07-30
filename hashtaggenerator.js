// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
	if (str.length === 0) return false;
	let arr = str.trim().split(' ');
	let newStr = '#';

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == '') continue;
		newStr += arr[i][0].toUpperCase() + arr[i].slice(1);
	}

	if (newStr.length > 140 || newStr == '#') return false;

	return newStr;
}
