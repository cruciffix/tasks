// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
	let arr = [String(r), String(g), String(b)];
	let flagElement = '';

	arr.forEach(element => {
		let cumm = '';
		if (element > 255) element = 255;
		if (element <= 0) element = 0;

		let resSymbol = Number(element).toString(16);

		resSymbol.length == 1 ? (cumm += '0' + resSymbol) : (cumm += resSymbol);

		flagElement += cumm;
	});

	return flagElement.toUpperCase();
}
