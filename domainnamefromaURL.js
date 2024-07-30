// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
	let str = '';
	if (url.startsWith('http://')) {
		str += url.slice(7);
	} else if (url.startsWith('https://')) {
		str += url.slice(8);
	} else {
		str = url;
	}

	if (str.startsWith('www')) {
		str = str.slice(4);
	}

	return str.slice(0, str.indexOf('.'));
}
