import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {RTCView} from 'react-native-webrtc';
import {connect} from 'react-redux';
import ToolBar from './ToolBar';
import CallingLoader from './CallingLoader';

export class VideoScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  videoView: {
    flex: 1,
    backgroundColor: 'black',
  },
});

const mapStateToProps = state => {
  // convert map to array
  let dataSource = [];

  Object.keys(state.videosession.videoStreams).map(userId => {
    dataSource.push({
      userId: userId,
      stream: state.videosession.videoStreams[userId],
    });
  });

  return {
    videoStreamsDataSource: dataSource,
  };
};

export default connect(mapStateToProps)(VideoScreen);
