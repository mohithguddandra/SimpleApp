import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import Details from "./screens/Details";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: Details },
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(MainNavigator);
