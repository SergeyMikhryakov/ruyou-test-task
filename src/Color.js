import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { SketchPicker } from 'react-color';

import {targetsSelector, colorOfCurrentTargetSelector} from "./selectors";
import {changeCurrentTarget, changeColorOfCurrentTarget} from "./ac";

class Color extends PureComponent {
	render () {
		const {targets, colorOfCurrentTarget} = this.props;

		return (
			<div className="color">
				<h1>часть 2</h1>
				<p>здесь должен быть колорпикер и группа объектов, при изменении цвета в колорпикере выбранный цвет
					должен устанавливаться в качестве фона для выбранного объекта из группы, активный объект выбирается
					кликом по одному из группы</p>

				<SketchPicker color={colorOfCurrentTarget} onChange={this.handleChangeColor}/>

				<div className="targets">
					{Object.keys(targets).map(index => (
						<div key={index}
						     className="target"
						     style={{backgroundColor: targets[index].color}}
						     onClick={this.handleClickTarget(index)}
						></div>
					))}
				</div>
			</div>
		)
	}

	handleChangeColor = (color) => {
		const {changeColorOfCurrentTarget} = this.props;
		changeColorOfCurrentTarget && changeColorOfCurrentTarget(color.hex);
	};

	handleClickTarget = (index) => () => {
		const { changeCurrentTarget } = this.props;
		changeCurrentTarget && changeCurrentTarget(index);
	}
}

export default connect(
	state => ({
		targets: targetsSelector(state),
		colorOfCurrentTarget: colorOfCurrentTargetSelector(state),
	}),
	{
		changeCurrentTarget,
		changeColorOfCurrentTarget,
	}
)(Color);