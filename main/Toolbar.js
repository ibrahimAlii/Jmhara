import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SearchBar, colors } from 'react-native-elements';



export default class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    updateSearch = search => {
        this.setState({ search });
      };


    render() {
        const { search } = this.state;
        return (
            <View style={styles.bar}>
                
                <SearchBar
                    lightTheme={true}
                    placeholder="ابحث عن مصطلحات"
                    containerStyle={styles.searchbarContainer}
                    inputContainerStyle={styles.searchbarContent}
                    inputStyle={styles.searchbarInput}
                    onChangeText={this.updateSearch}
                    value={search}
                    
                />
            </View>
        );
    }

   
}
const styles = StyleSheet.create({
    searchbarContainer: {
      maxWidth: '320px',
      backgroundColor: colors.grey5
    
    },
    searchbarContent: {
        backgroundColor: '#fff',
        color: '#000'
    },

    searchbarInput:{
        color: '#000',
        fontSize: 15,
        textAlign: 'right',
    },
    bar: {
        backgroundColor: '#fff',
        alignItems: 'baseline',
        alignSelf: 'right',
        position: 'absolute',
        right: '0px',
        
    }
  });

