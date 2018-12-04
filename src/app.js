const fs = require('fs');
const utils = require('./utils/index.js');

const input = fs.readFileSync('../assets/input.txt', 'utf8');
const lines = input.split('\n');
const result = lines.reduce((obj, line, index) => {
	const val = `line${index}`;
	if (line.split(' ').length < 3) return { ...obj, testsQty: Number(line) };
	const test = {
		n: Number(line.split(' ')[0]),
		k: Number(line.split(' ')[1]),
		d: line.split(' ')
			.slice(2)
			.map((num) => Number(num))
			.sort((a, b) => a - b),
	};
	return {
		...obj,
		tests: [ ...obj.tests, test ],
	};
}, { testQty: 0, tests: [] });
