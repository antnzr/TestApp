import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    SafeAreaView,
    StyleSheet,
    View
} from 'react-native';

import {fetchImages} from '../actions'
import ImageItem from "../components/ImageItem";

class ListScreen extends Component {

    componentDidMount() {
        this.props.fetchImages();
    }

    renderItem = ({item}) =>
        (<ImageItem image={item}/>);

    keyExtractor = ({id}) => id.toString();

    render() {
        const {images, loading} = this.props;
        return (
            loading
                ?
                <View style={styles.loadingIndicator}>
                    <ActivityIndicator size="large" color="#330066" animating/>
                </View>
                :
                <SafeAreaView style={styles.container}>
                    <FlatList
                        style={styles.list}
                        data={images}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}/>
                </SafeAreaView>
        );
    }
}

const mapStateToProps = ({imagesList: {images, loading}}) => {
    return {images, loading};
};

const mapDispatchToProps = {
    fetchImages
};

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen)

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: Dimensions.get('window').width,
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        marginHorizontal: 5
    }
});