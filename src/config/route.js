import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from '../pages/Home';
import MindRecord from '../pages/MindRecord';

const AppNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    title: '主页',
  },
  MindRecord: {
    screen: MindRecord,
  },
});
const Route = createAppContainer(AppNavigator);
export default Route;
