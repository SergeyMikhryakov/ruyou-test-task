import {ADD_FONT, CHANGE_CURRENT_FONT, CHANGE_CURRENT_TARGET, CHANGE_COLOR_OF_TARGET} from "../constant";

export const addNewFont = (font) => ({
	type: ADD_FONT,
	payload: {font},
	refreshFonts: true,
});

export const changeCurrentFont = (currentFont) => ({
	type: CHANGE_CURRENT_FONT,
	payload: {currentFont}
});

export const changeCurrentTarget = (currentTarget) => ({
	type: CHANGE_CURRENT_TARGET,
	payload: {currentTarget}
});

export const changeColorOfCurrentTarget = (color) => ({
	type: CHANGE_COLOR_OF_TARGET,
	payload: {color},
});

