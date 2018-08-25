import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, LayoutAnimation, Platform, UIManager } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common/index';
import * as actions from '../actions/index';

class ListItem extends Component{

    constructor() {
        super();
        if(Platform.OS === 'android'){
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;
        if(expanded) {
            return(
                <CardSection>
                    <Text style={styles.descriptionText}>{library.description}</Text>
                </CardSection>

            )
        }
    };

    render() {
        let { title, id } = this.props.library;
        console.log('==>', this.props);
        return(
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionText: {
        flex: 1,
        paddingHorizontal: 5
    }
});

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded }
};

export default connect(mapStateToProps, actions)(ListItem);