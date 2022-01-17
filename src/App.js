import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import './App.css';
import { Dashboard } from "./views/Dashboard";
import { PostSearch } from "./views/postSearch/PostSearch";
import { UserList } from "./views/user/UserList";
import { SideBar } from "../src/components/sidebar/SideBar";
import topReducer from "../src/redux/reducers"

const store = createStore(topReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SideBar />
        <div id='content-wrapper'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/post-search" element={<PostSearch />} />
              <Route path="/user-list" element={<UserList />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </Provider>
  );
}

export default App;