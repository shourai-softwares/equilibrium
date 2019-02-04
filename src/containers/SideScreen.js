import React from 'react';
import { ScrollView, View } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import AlbunsFrame from '../components/AlbunsFrame';

// eslint-disable-next-line react/prefer-stateless-function
class SideScreen extends React.Component {
  render() {
    return (
      <View style={{ padding: 10, height: null }}>
        <ButtonGroup
          buttons={['Minhas Fotos', 'Todos']}
        />
        <ScrollView style={{ height: null }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <AlbunsFrame />
            <AlbunsFrame />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SideScreen;
