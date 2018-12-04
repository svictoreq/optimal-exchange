function getClosestCoins(num, set) {
	let total = 0;
	const coins = [];
	while (total !== num) {
		const abs = set.map((coin) => Math.abs(num - (total > num ? total - coin : total + coin)));
		const coinIndex = abs.indexOf(Math.min(...abs));
		coins.push(set[coinIndex]);
		total = total > num ? total - set[coinIndex] : total + set[coinIndex];
	}
	return coins;
}

module.exports = {
	getClosestCoins,
}
