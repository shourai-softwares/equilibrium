import React from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { imgSuryaNamaskar } from '../images';

// eslint-disable-next-line react/prefer-stateless-function
class PostFrame extends React.Component {
  render() {
    return (
      <Card
        title="HELLO WORLD"
        image={imgSuryaNamaskar}
      >
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
          title="VIEW NOW"
          backgroundColor="#03A9F4"
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        />
      </Card>
    );
  }
}

export default PostFrame;
