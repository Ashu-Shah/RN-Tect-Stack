import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component{

    componentWillMount() {
        this.data = this.props.libraries;
    }

    renderItem({item}) {
        return(
            <ListItem library={item}/>
        )
    }

    render() {
        return(
            <FlatList
                data={this.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id.toString()}
            />
        )
    }
}

const mapToStateProps = state => ({
    libraries: state.libraries
});

export default connect(mapToStateProps)(LibraryList);