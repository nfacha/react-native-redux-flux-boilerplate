import React, {Component} from 'react';
import {Button, Card, CardSection, Input} from "../common/index";
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from "../../actions/index";
import {Text, View} from "react-native";

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {email, password} = this.props;
        this.props.loginUser({email: email, password: password});
    }

    renderError() {
        if (this.props.error) {
            return (
                <View>
                    <Text>{this.props.error}</Text>
                </View>
            );
        }
    }

    render() {
        return (
            <Card>

                <CardSection>
                    <Input
                        label='Email'
                        placeholder='user@gmail.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Password'
                        placeholder='password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        secureTextEntry
                    />
                </CardSection>

                <CardSection>
                    {this.renderError()}
                    <Button
                        onPress={this.onButtonPress.bind(this)}
                    >Login</Button>
                </CardSection>

            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error
    }
};
export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);