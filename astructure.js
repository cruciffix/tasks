function closureFunc() {
	let result = '';

	return function func(arr) {
		arr.forEach(element => {
			if (Array.isArray(element)) {
				result += '|';
				func(element);
				result += '|';
			} else {
				element = 0;
				result += element;
			}
		});

		return result;
	};
}

Array.prototype.Structure = function (other) {
	if (!Array.isArray(other) || !Array.isArray(this)) return false;
	let before = closureFunc();
	let after = closureFunc();

	return before(this) == after(other);
};
