import {   StatusBar, View } from 'react-native';
import { styles } from './assets/styles/styles';
import {NavigationContainer} from "@react-navigation/native";
import {setupStore} from './redux/store'
import { Provider } from 'react-redux';
import Router from './Router';
const store = setupStore()
export default function App() {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle = "default" hidden = {false} backgroundColor = "#000" translucent = {true}/>
      <View  style={{flex:4,...styles.body}}>
       <Router />
      </View>
    </NavigationContainer>
    </Provider>
    
  );
}


