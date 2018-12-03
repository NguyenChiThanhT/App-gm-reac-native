import React, { Component } from 'react';
import { StyleSheet, Text, View, NativeModules, TouchableOpacity, Dimensions, } from 'react-native';
import { Button } from 'native-base';
import FIcon from 'react-native-vector-icons/FontAwesome';
const { RNTwitterSignIn } = NativeModules;
const { width } = Dimensions.get('window');
const Constants = {
    // Dev Parse keys
    TWITTER_COMSUMER_KEY: 'Mp0taY9OcO8UhvacuTPU73Xbp',
    TWITTER_CONSUMER_SECRET: 'HWAhDOOUFYsuL4H4w445eEta2lzpxRBN07zxuFZCo5UwbD9RqG',
};
export default class TwitterButton extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            isLoggedIn: false,
        };
        this._twitterSignIn = () => {
            RNTwitterSignIn.init(Constants.TWITTER_COMSUMER_KEY, Constants.TWITTER_CONSUMER_SECRET);
            RNTwitterSignIn.logIn()
                .then(loginData => {
                console.log(loginData);
                const { authToken, authTokenSecret } = loginData;
                if (authToken && authTokenSecret) {
                    this.setState({
                        isLoggedIn: true,
                    });
                }
            })
                .catch(error => {
                console.log(error);
            });
        };
        this.handleLogout = () => {
            RNTwitterSignIn.logOut();
            this.setState({
                isLoggedIn: false,
            });
        };
    }
    render() {
        const { isLoggedIn } = this.state;
        return (React.createElement(View, { style: { flex: 1, alignItems: 'center', justifyContent: 'center' } }, isLoggedIn ? (React.createElement(TouchableOpacity, { onPress: this.handleLogout },
            React.createElement(Text, null, "Log out"))) : (React.createElement(Button, { onPress: this._twitterSignIn, style: {
                width: width * 0.9,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
                backgroundColor: '#1DA1F2',
                borderColor: '#EEEEEE',
            } },
            React.createElement(FIcon, { style: {
                    color: '#FFF',
                    marginRight: 10,
                }, size: 22, name: 'twitter' }),
            React.createElement(Text, { style: { color: '#FFF' } }, "Twitter\u3067\u30ED\u30B0\u30A4\u30F3")))));
    }
}
const styles = StyleSheet.create({
    icon: {
        width: 200,
        height: 50,
    },
});
//# sourceMappingURL=index.js.map