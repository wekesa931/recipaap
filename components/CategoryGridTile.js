import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback
} from 'react-native';
import { Platform } from '@unimodules/core';

const CategoryGridTile = (props) => {
    let TouchableComp = TouchableOpacity
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComp = TouchableNativeFeedback
    }
    return ( 
        <View style={styles.gridItems} >
            <TouchableComp 
                style={{flex: 1}}
                onPress={props.onSelect} >
                <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                    <Text 
                        style={styles.title}
                        numberOfLines={2} >
                        {props.title}
                    </Text>
                </View>
            </TouchableComp>
        </View>
     );
}

const styles = StyleSheet.create({
    gridItems: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        // for IOS
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        // for Android
        elevation: 3,
        padding: 15,
        justifyContent: "flex-end",
        alignItems: 'flex-end',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
});

export default CategoryGridTile;