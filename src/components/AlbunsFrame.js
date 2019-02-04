import React from 'react';
import { Card } from 'react-native-elements';
import { imgSuryaNamaskar } from '../images';

// eslint-disable-next-line react/prefer-stateless-function
class AlbunsFrame extends React.Component {
  render() {
    return (
      <Card
        image={imgSuryaNamaskar}
        containerStyle={{ flexGrow: 1, width: 50 }}
      />
    );
  }
}

export default AlbunsFrame;
