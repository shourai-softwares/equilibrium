import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import HomeScreen from './src/containers/HomeScreen';
import SideScreen from './src/containers/SideScreen';

const TabNavigator = createMaterialTopTabNavigator({
  Notícias: { screen: HomeScreen },
  Albums: { screen: SideScreen },
  Eventos: { screen: SideScreen },
});

const App = createStackNavigator({
  Main: TabNavigator,
});

export default App;
