import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Text, View} from "react-native";
import reducers from './reducers'
import ReduxThunk from 'redux-thunk';

class App extends Component {
    componentWillMount() {

    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <View>
                    <Text>Boilerplate</Text>
                </View>
            </Provider>
        );
    }
}

export default App;