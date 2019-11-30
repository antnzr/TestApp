import React, {Component} from 'react';
import {ActivityIndicator, Image, SafeAreaView, StyleSheet} from 'react-native';

class ImageScreen extends Component {

    state = {
        loading: true
    };

    _onLoadEnd = () => {
        this.setState({
            loading: false
        })
    };

    render() {
        const {navigation} = this.props;
        const image = navigation.getParam("image", {});

        return (
            <SafeAreaView style={styles.container}>
                <Image
                    onLoadEnd={this._onLoadEnd}
                    style={styles.image}
                    source={{uri: image.imageFullSrc}}/>
                <ActivityIndicator
                    style={styles.loadingIndicator}
                    size='large' color="#330066"
                    animating={this.state.loading}/>
            </SafeAreaView>
        )
    }
}

export default ImageScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: 'cover'
    },
    loadingIndicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }
});