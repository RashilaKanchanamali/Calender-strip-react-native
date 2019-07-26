import React, { PureComponent } from 'react';
import { Alert, StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import CalendarStrip from 'react-native-slideable-calendar-strip';
const width = Dimensions.get('window').width;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <CalendarStrip
          selectedDate={this.state.selectedDate}
          onPressDate={(date) => {
            this.setState({ selectedDate: date });
          }}
          onPressGoToday={(today) => {
            this.setState({ selectedDate: today });
          }}
          onSwipeDown={() => {
            alert('onSwipeDown');
          }}
          markedDate={['']}
        />

        
        {/* <View style={{
          width,
          marginTop: 100,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
          <TouchableOpacity onPress={() => {
            const d = new Date(2018, 3, 20);
            this.setState({
              selectedDate: d,
            });
          }}><Text style={{ fontSize: 17, color: '#305082'}}>abcd</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {
            const d = new Date(2018, 5, 20);
            this.setState({
              selectedDate: d,
            });
          }}><Text style={{ fontSize: 17, color: '#305082'}}>abcd</Text></TouchableOpacity>
        </View> */}
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
});