import {ADD_FONT, CHANGE_CURRENT_FONT} from "../constant";

const fontStore = {
	fonts: [],
	currentFont: null,
};

export default (store = fontStore, action) => {
	const {type, payload} = action;

	switch (type) {
		case ADD_FONT:
			return {
				...store,
				fonts: store.fonts.concat(payload.font)
			};

		case CHANGE_CURRENT_FONT:
			return {
				...store,
				currentFont: payload.currentFont,
			};

		default:
			return store;
	}
}