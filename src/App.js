import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
//provider makes the redux store available to comps nested in connect
import store from "./redux/store";
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <ItemContainer cake/>
       <ItemContainer />
       <CakeContainer/>
       <HooksCakeContainer/>
       <IceCreamContainer/>
       <NewCakeContainer/>
       <UserContainer/>

    </div>
    </Provider>
  );
}

export default App;
