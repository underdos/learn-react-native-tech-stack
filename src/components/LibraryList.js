import React, { Component } from 'react';
import { ListView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

    componentWillMount () {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow (library) {
        return <ListItem library={library} />
    }

    render () {
        return (
            <ScrollView style={{ flex:1 }}>                    
                <ListView 
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </ScrollView>
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList)