/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
/*import Menu from './src/Menu';*/ 
/*import ArcoIris from './src/ArcoIris'; */ 
/*import Teste from './src/Teste'; */  
import RevistaNattiva from './src/RevistaNattiva';



AppRegistry.registerComponent(appName, () => RevistaNattiva);
