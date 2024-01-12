import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import QuizApp from '../screens/quiz-app/quiz-app';
import DetailsScreen from '../screens/details-screen/details-screen';
const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="QuizApp" component={QuizApp} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
