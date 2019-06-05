import {CHANGE_CURRENT_TARGET, CHANGE_COLOR_OF_TARGET} from "../constant";

const colorReducer = {
	targets: {
		1: {color: ''},
		2: {color: ''},
		3: {color: ''},
		4: {color: ''},
		5: {color: ''},
	},
	current: 1
};

export default (store = colorReducer, action) => {
	const {type, payload} = action;

	switch (type) {
		case CHANGE_CURRENT_TARGET:
			return {
				...store,
				current: payload.currentTarget,
			};

		case CHANGE_COLOR_OF_TARGET:
			return {
				...store,
				targets: {
					...store.targets,
					[store.current]: {color: payload.color}
				}
			};

		default:
			return store;
	}
}