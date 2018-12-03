import React, {Component} from 'react';
import ReactNative from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const {
	ViewPropTypes,
	Dimensions,
	View,
	Animated,
	ScrollView,
	Platform,
	Text,
	I18nManager
} = ReactNative;

// @ts-ignore
import Button from './Button';

const WINDOW_WIDTH = Dimensions.get('window').width;

export default class ScrollableTabBar extends Component {
	constructor(props) {
		super(props);
		this.state = this.getInitialState();
		this.updateView = this.updateView.bind(this);
		this.necessarilyMeasurementsCompleted = this.necessarilyMeasurementsCompleted.bind(this);
		this.updateTabPanel = this.updateTabPanel.bind(this);
		this.updateTabUnderline = this.updateTabUnderline.bind(this);
		this.updateTabUnderline = this.updateTabUnderline.bind(this);
		this.renderTab = this.renderTab.bind(this);
		this.measureTab = this.measureTab.bind(this);
		this.onTabContainerLayout = this.onTabContainerLayout.bind(this);
		this.onContainerLayout = this.onContainerLayout.bind(this);
	}

	getInitialState() {
		this._tabsMeasurements = [];
		return {
			_leftTabUnderline: new Animated.Value(0),
			_widthTabUnderline: new Animated.Value(0),
			_containerWidth: null,
			data: []
		};
	}

	componentDidMount() {
		this.props.scrollValue.addListener(this.updateView);
		let newData = this.props.tabs.concat([this.props.tabs[0]]);
		this.setState({data: newData});
	}

	updateView(offset) {
		const position = Math.floor(offset.value);
		const pageOffset = offset.value % 1;
		const tabCount = this.state.data.length;
		const lastTabPosition = tabCount - 1;

		if (tabCount === 0 || offset.value < 0 || offset.value > lastTabPosition) {
			return;
		}

		if (this.necessarilyMeasurementsCompleted(position, position === lastTabPosition)) {
			this.updateTabPanel(position, pageOffset);
			this.updateTabUnderline(position, pageOffset, tabCount);
		}
	}

	necessarilyMeasurementsCompleted(position, isLastTab) {
		return this._tabsMeasurements[position] &&
			(isLastTab || this._tabsMeasurements[position + 1]) &&
			this._tabContainerMeasurements &&
			this._containerMeasurements;
	}

	updateTabPanel(position, pageOffset) {
		const containerWidth = this._containerMeasurements.width;
		const tabWidth = this._tabsMeasurements[position].width;
		const nextTabMeasurements = this._tabsMeasurements[position + 1];
		const nextTabWidth = nextTabMeasurements && nextTabMeasurements.width || 0;
		const tabOffset = this._tabsMeasurements[position].left;
		const absolutePageOffset = pageOffset * tabWidth;
		let newScrollX = tabOffset + absolutePageOffset;

		// center tab and smooth tab change (for when tabWidth changes a lot between two tabs)
		newScrollX -= (containerWidth - (1 - pageOffset) * tabWidth - pageOffset * nextTabWidth) / 2;
		newScrollX = newScrollX >= 0 ? newScrollX : 0;

		if (Platform.OS === 'android') {
			this._scrollView && this._scrollView.scrollTo({x: newScrollX, y: 0, animated: false});
		} else {
			const rightBoundScroll = this._tabContainerMeasurements.width - (this._containerMeasurements.width);
			newScrollX = newScrollX > rightBoundScroll ? rightBoundScroll : newScrollX;
			this._scrollView && this._scrollView.scrollTo({x: newScrollX, y: 0, animated: false});
		}

	}

	updateTabUnderline(position, pageOffset, tabCount) {
		const lineLeft = this._tabsMeasurements[position].left;
		const lineRight = this._tabsMeasurements[position].right;

		if (position < tabCount - 1) {
			const nextTabLeft = this._tabsMeasurements[position + 1].left;
			const nextTabRight = this._tabsMeasurements[position + 1].right;

			const newLineLeft = (pageOffset * nextTabLeft + (1 - pageOffset) * lineLeft);
			const newLineRight = (pageOffset * nextTabRight + (1 - pageOffset) * lineRight);

			this.state._leftTabUnderline.setValue(newLineLeft);
			this.state._widthTabUnderline.setValue(newLineRight - newLineLeft);
		} else {
			this.state._leftTabUnderline.setValue(lineLeft);
			this.state._widthTabUnderline.setValue(lineRight - lineLeft);
		}
	}

	renderTab(name, page, isTabActive, onPressHandler, onLayoutHandler) {
		const {activeTextColor, inactiveTextColor, textStyle} = this.props;
		const textColor = isTabActive ? activeTextColor : inactiveTextColor;
		const fontWeight = isTabActive ? 'bold' : 'normal';

		return <Button
			key={`${name}_${page}`}
			accessible={true}
			accessibilityLabel={name}
			accessibilityTraits='button'
			onPress={() => this.state.data.length - 1 === page ? onPressHandler(0) : onPressHandler(page)}
			onLayout={onLayoutHandler}
		>
			<View style={[styles.tab, this.props.tabStyle]}>
				<Text style={[{color: textColor, fontWeight}, textStyle]}>
					{name}
				</Text>
			</View>
		</Button>;
	}

	measureTab(page, event) {
		const {x, width, height} = event.nativeEvent.layout;
		this._tabsMeasurements[page] = {left: x, right: x + width, width, height};
		this.updateView({value: this.props.scrollValue.__getValue()});
	}

	render() {
		const tabUnderlineStyle = {
			position: 'absolute',
			height: 4,
			backgroundColor: 'rgb(148,93,96)',
			bottom: 0
		};

		const key = I18nManager.isRTL ? 'right' : 'left';
		const dynamicTabUnderline = {
			[`${key}`]: this.state._leftTabUnderline,
			width: this.state._widthTabUnderline
		};

		return <View
			style={[styles.container, {backgroundColor: this.props.backgroundColor}, this.props.style]}
			onLayout={this.onContainerLayout}
		>
			<ScrollView
				automaticallyAdjustContentInsets={false}
				ref={(scrollView) => {
					this._scrollView = scrollView;
				}}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				directionalLockEnabled={true}
				onScroll={this.props.onScroll}
				bounces={false}
				scrollsToTop={false}
				pagingEnabled={true}
			>
				<View
					style={[styles.tabs, {width: this.state._containerWidth}, this.props.tabsContainerStyle]}
					ref={'tabContainer'}
					onLayout={this.onTabContainerLayout}
				>
					{this.state.data.map((name, page) => {
						const isTabActive = this.props.activeTab === page;
						const renderTab = this.props.renderTab || this.renderTab;
						return renderTab(name, page, isTabActive, this.props.goToPage, this.measureTab.bind(this, page));
					})}
					<Animated.View style={[tabUnderlineStyle, dynamicTabUnderline, this.props.underlineStyle]}/>
				</View>
			</ScrollView>
		</View>;
	}

	componentWillReceiveProps(nextProps) {
		// If the tabs change, force the width of the tabs container to be recalculated
		if (JSON.stringify(this.props.tabs) !== JSON.stringify(nextProps.tabs)) {
			this.setState({_containerWidth: null});
		}
	}

	onTabContainerLayout(e) {
		this._tabContainerMeasurements = e.nativeEvent.layout;
		let width = this._tabContainerMeasurements.width;
		if (width < WINDOW_WIDTH) {
			width = WINDOW_WIDTH;
		}
		this.setState({_containerWidth: width});
		this.updateView({value: this.props.scrollValue.__getValue()});
	}

	onContainerLayout(e) {
		this._containerMeasurements = e.nativeEvent.layout;
		this.updateView({value: this.props.scrollValue._value});
	}
}

ScrollableTabBar.defaultProps = {
	scrollOffset: 52,
	activeTextColor: 'rgb(148,93,96)',
	inactiveTextColor: 'black',
	backgroundColor: null,
	style: {},
	tabStyle: {},
	tabsContainerStyle: {},
	underlineStyle: {}
};

ScrollableTabBar.propTypes = {
	goToPage: PropTypes.func,
	activeTab: PropTypes.number,
	tabs: PropTypes.array,
	backgroundColor: PropTypes.string,
	activeTextColor: PropTypes.string,
	inactiveTextColor: PropTypes.string,
	scrollOffset: PropTypes.number,
	style: ViewPropTypes.style,
	tabStyle: ViewPropTypes.style,
	tabsContainerStyle: ViewPropTypes.style,
	textStyle: Text.propTypes.style,
	renderTab: PropTypes.func,
	underlineStyle: ViewPropTypes.style,
	onScroll: PropTypes.func,
};
