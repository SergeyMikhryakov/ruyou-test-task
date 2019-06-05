import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {fontsSelector, currentFontSelector} from "./selectors";
import {addNewFont, changeCurrentFont} from "./ac";

class Font extends PureComponent {

	state = {
		newFont: ''
	};

	link = null;

	render() {
		const {newFont} = this.state;
		const {fonts = [], currentFont} = this.props;

		const styles = {
			fontFamily: currentFont,
		};

		return (
			<div className="font">
				<h1>часть 1</h1>
				<div className="controls">
					<div>
						<span>шрифты с <a href="https://fonts.google.com/" target="_blank">https://fonts.google.com/</a> (например Roboto, Oswald и т.п.)</span>
						<div>
							<input type="text"
							       value={newFont}
							       onChange={this.changeNewFontInput}
							/>
							<button onClick={this.handleClickAddButton}>добавить</button>
						</div>
						<div>
							<span>список шрифтов</span>
							<select value={currentFont || ''} onChange={this.handleChangeFontsSelect}>
								<option value=""></option>
								{fonts.map(font => (
									<option key={font} value={font}>{font}</option>
								))}
							</select>
						</div>
					</div>
				</div>
				<div>
					<span style={styles}>выбранный в списке шрифт должен применяться к этому тексту</span>
				</div>
			</div>
		)
	}

	changeNewFontInput = (event) => {
		this.setState({newFont: event.target.value})
	};

	handleClickAddButton = () => {
		const {addNewFont} = this.props;
		const fontName = this.state.newFont;
		addNewFont && fontName && addNewFont(this.state.newFont);

		this.setState({newFont: ''});
	};

	handleChangeFontsSelect = (event) => {
		const {changeCurrentFont} = this.props;
		changeCurrentFont && changeCurrentFont(event.target.value)
	};
}

export default connect(
	store => ({
		fonts: fontsSelector(store),
		currentFont: currentFontSelector(store),
	}),
	{
		addNewFont,
		changeCurrentFont,
	}
)(Font);