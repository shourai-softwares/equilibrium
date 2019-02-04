import React from 'react';
import { ScrollView, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import PostFrame from '../components/PostFrame';

// eslint-disable-next-line react/prefer-stateless-function
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ padding: 10, height: null }}>
        <ButtonGroup
          selectedIndex={0}
          buttons={['Atualizações', 'Avisos']}
        />
        <ScrollView>
          <PostFrame />
          <PostFrame />
          <PostFrame />
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;
