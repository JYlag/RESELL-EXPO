import React, { Component } from 'react';
import {View, Text, TextInput} from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common/index.js';
import { connect } from 'react-redux';
import { usernameChanged, passwordChanged, loginUser, navigateSignup } from "../actions/AuthActions";
import {SmallButton} from "./common/SmallButton";

class LoginForm extends Component {

    onUsernameChange(text) {
        this.props.usernameChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    switchToSignup() {
        this.props.navigateSignup();
    }

    onButtonPress() {
        const { username, password } = this.props;

        this.props.loginUser({ username, password });
    }

    renderError() {
        if (this.props.error) {
            return (
              <View style={ styles.errorDivStyle }>
                  <Text style={styles.errorTextStyle}>
                      {this.props.error}
                  </Text>
              </View>
            );
        }
    }

    renderButton() {
        if ( this.props.loading) {
            return <Spinner size="large"></Spinner>
        }

        return(
            <View style={styles.containerStyle}>
                <View style={ styles.sectionStyle }>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </View>
                <View style={[ styles.sectionStyle, { borderBottomWidth: 0, alignSelf: 'center', flexDirection: 'column'}]}>
                    <Text>
                        Don't have an account?
                    </Text>
                    <SmallButton onPress={ this.switchToSignup.bind(this) }>
                        Sign up here!
                    </SmallButton>
                </View>
            </View>


        );
    }

    render() {

        const { backgroundStyle, inputStyle, sectionStyle, inputPlaceholderStyle } = styles;

        return(
            <View style={ backgroundStyle }>
                    <View style={ inputStyle }>
                        <TextInput
                        label="Username"
                        placeholder="email@gmail.com"
                        onChangeText={this.onUsernameChange.bind(this)}
                        value={ this.props.username }
                        keyboardType="email-address"
                        style={inputPlaceholderStyle}
                        spellCheck={false}
                        />
                    </View>

                    <View style={ inputStyle }>
                        <TextInput
                        secureTextEntry
                        label="Password"
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={ this.props.password}
                        style={inputPlaceholderStyle}
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
        fontSize: 15,
        color: '#E3F2FD',
        textAlign: 'center',
        marginTop: 6,
        marginHorizontal: 20
    },
    containerStyle: {
        borderWidth: 0,
        borderRadius: 0,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0,
        shadowRadius: 0,
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'column'
    }
}

const mapStateToProps = state => {
    const { username, password, error, loading } = state.auth;

    return {
        username: username,
        password: password,
        error: error,
        loading: loading
    }
};

export default connect(mapStateToProps, {
    usernameChanged,
    passwordChanged,
    loginUser,
    navigateSignup

})(LoginForm);