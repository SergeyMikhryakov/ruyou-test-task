import {fontsSelector} from "../selectors";

let link = null;

export default (store) => (next) => (action) => {

	const { refreshFonts } = action;

	next(action);

	if (!refreshFonts) return;

	if (link) {
		document.head.removeChild(link);
	}

	const fonts = fontsSelector(store.getState());

	const families = fonts.reduce((acc, font) => {
		const family = font.replace(/ +/g, '+');

		acc.push(family);

		return acc;
	}, []).join('|');

	link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = `https://fonts.googleapis.com/css?family=${families}`;

	document.head.appendChild(link);
}