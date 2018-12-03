import * as React from 'react';
import { View, Text, Image, Easing, Animated, StyleSheet } from 'react-native';

import logo from '../../../../assets/images/logo.png';
export interface Props {
	navigation: any;
}
export interface State {}
const welcome = "自分でつくる。";
let arrTemp = [];
for(let i=0; i < welcome.length; i++) {
    arrTemp.push(welcome[i]);
}
class SplashCreen extends React.Component<Props, State> {
	constructor(props) {
		super(props);
        this.state = {};
        this.animatedValue = []
        arrTemp.forEach((value) => {
            this.animatedValue[value] = new Animated.Value(0)
        })
    }

	componentDidMount() {
		setTimeout(() => {
			this.props.navigation.navigate('Login');
        }, 3500);
        this.animate()
    }
    animate () {
        const animations = arrTemp.map((item) => {
          return Animated.timing(
            this.animatedValue[item],
            {
              toValue: 1,
              duration: 400
            }
          )
        })
        Animated.sequence(animations).start()
    }
	render() {
        
        const animations = arrTemp.map((val, i) => {
            return  ( <Animated.View key={i} style={{opacity: this.animatedValue[val], marginTop: 3}}>
                <Text style={{fontSize: 15}}>{val}</Text>
            </Animated.View>)
        })
        console.log(arrTemp)
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Image source={logo} resizeMode='contain' />
				<Animated.View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
					{animations}
				</Animated.View>
			</View>
		);
	}
}

export default SplashCreen;
