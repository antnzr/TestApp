import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Dimensions,
    ActivityIndicator,
    Image,
    SafeAreaView,
    StyleSheet
} from 'react-native';

import {
    fetchImageById,
    clearImage
} from "../actions";

class ImageScreen extends Component {

   componentDidMount() {
       this.props.fetchImageById(this.props.navigation.getParam("id", null))
   }

   componentWillUnmount() {
       this.props.clearImage();
   }

    render() {
        const {image, loading} = this.props;

        return (
            <SafeAreaView style={styles.container}>
                <Image
                    style={styles.image}
                    source={{uri: image.imageFullSrc}}/>
                <ActivityIndicator
                    style={styles.loadingIndicator}
                    size='large'
                    animating={loading}/>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = ({imageData: {image, loading}}) => {
    return {image, loading}
};

const mapDispatchToProps = {
    fetchImageById,
    clearImage
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageScreen)

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        maxHeight: height,
        maxWidth: width
    },
    loadingIndicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }
});