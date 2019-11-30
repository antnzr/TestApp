import React, {Component} from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {withNavigation} from 'react-navigation'

class ImageItem extends Component {

    render() {
        const {image, navigation} = this.props;
        return (
            <SafeAreaView
                style={styles.cardContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Image', {image: image})}>
                    <Image style={styles.image}
                           source={{uri: image.imageSrc}}/>
                </TouchableOpacity>
                <View style={styles.description}>
                    {image.name && <Text style={styles.nameText}>
                        {image.name || 'no name'}
                    </Text>}
                    <Text style={styles.authorText}>
                        {image.author}
                    </Text>
                </View>
            </SafeAreaView>
        )
    }
}

export default withNavigation(ImageItem)

const styles = StyleSheet.create({
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 5,
        marginBottom: 5
    },
    description: {
        width: 0,
        flexGrow: 1,
        flex: 1,
        marginLeft: 10,
        marginRight: 5,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
        resizeMode: 'cover'
    },
    nameText: {
        flexWrap: 'wrap',
        fontSize: 20,
    },
    authorText: {
        flexWrap: 'wrap',
        fontSize: 18,
        color: 'darkblue'
    }
});
