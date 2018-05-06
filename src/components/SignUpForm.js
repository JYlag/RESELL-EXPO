import React, { Component } from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from "./common";
import { usernameChanged, passwordChanged, verifyChanged, signupUser, navigateLogin } from "../actions/SignUpActions";
import {SmallButton} from "./common/SmallButton";
import { Actions } from 'react-native-router-flux';


class SignUpForm extends Component {

    onUsernameChange(text) {
        this.props.usernameChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onVerifyChange(text) {
        this.props.verifyChanged(text);
    }

    onButtonPress() {

        const { username, password, verify } = this.props;

        this.props.signupUser({ username, password, verify })

    }

    switchToLogin() {
        this.props.navigateLogin();
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={ styles.errorDivStyle} >
                    <Text style={ styles.errorTextStyle }>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {

        const { sectionStyle, containerStyle } = styles;

        if (this.props.loading ) {
            return <Spinner size="large"/>
        }

        return (
            <View style={ containerStyle }>
                <View style={ sectionStyle }>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Sign Up
                    </Button>
                </View>
                <View style={[ sectionStyle, { alignSelf: 'center', flexDirection: 'column'}]}>
                    <Text>
                        Already have an account?
                    </Text>
                    <SmallButton onPress={ this.switchToLogin.bind(this) }>
                        Log in here
                    </SmallButton>
                </View>
            </View>
        );
    }

    render() {

        const { backgroundStyle, inputStyle, sectionStyle, inputPlaceholderStyle } = styles;

        return (
            <View style={backgroundStyle}>
                    <View style={ inputStyle }>
                        <TextInput
                        placeholder="Username"
                        onChangeText={this.onUsernameChange.bind(this)}
                        value={ this.props.username }
                        style={ inputPlaceholderStyle }
                        keyboardType="email-address"
                        spellCheck={false}
                        />
                    </View>

                    <View style={[ inputStyle ]}>
                        <TextInput
                        secureTextEntry
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={ this.props.password }
                        style={ inputPlaceholderStyle }
                        spellCheck={false}
                        />
                    </View>

                    <View style={ inputStyle }>
                        <TextInput
                        secureTextEntry
                        placeholder="Confirm Password"
                        onChangeText={this.onVerifyChange.bind(this)}
                        value={this.props.verify}
                        style={ inputPlaceholderStyle }
                        spellCheck={false}
                        />
                    </View>

                    {this.renderError()}

                    <View style={ sectionStyle }>
                        {this.renderButton()}
                    </View>
            </View>
        );
    }
}

const styles = {
    backgroundStyle: {
        backgroundColor: '#42A5F5',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    errorDivStyle:{
        borderWidth: 1,
        borderColor: '#E53935',
        borderRadius: 5,
        backgroundColor: '#EF9A9A',
        marginHorizontal: 45
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#D50000',
    },
    containerStyle: {
        borderWidth: 0,
        borderRadius: 0,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0,
        shadowRadius: 0,
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'column'
     },
    sectionStyle: {
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    inputStyle: {
        height: 40,
        borderBottomWidth: 1,
        borderColor: '#1976D2',
        marginHorizontal: 50,
        marginVertical: 10
    },
    inputPlaceholderStyle: {
        fontSize: 17,
        color: '#E3F2FD',
        textAlign: 'center',
        marginTop: 6,
        marginHorizontal: 20
    }
}

const mapStateToProps = state => {
    const { username,
        password,
        verify,
        error,
        loading
    } = state.signup;

    return {
        username: username,
        password: password,
        verify: verify,
        error: error,
        loading: loading
    }
}

export default connect(mapStateToProps, {
    usernameChanged,
    passwordChanged,
    verifyChanged,
    signupUser,
    navigateLogin
})(SignUpForm);