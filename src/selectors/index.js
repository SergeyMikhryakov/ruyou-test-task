import { createSelector } from 'reselect'

export const fontsSelector = (state) => state.font.fonts;
export const currentFontSelector = (state) => state.font.currentFont;

export const targetsSelector = (state) => state.color.targets;
export const currentTargetSelector = (state) => state.color.current;
export const colorOfCurrentTargetSelector = createSelector(
	targetsSelector,
	currentTargetSelector,
	(targets, current) => targets[current].color
);