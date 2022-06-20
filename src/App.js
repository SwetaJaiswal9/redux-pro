import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import store from './redux/store';
import NBAlist from './components/NBAlist';
import NBAdetails from './components/NBAdetails';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path='/' element={<NBAlist/>} />
          <Route path='/details/:id' element={<NBAdetails/>} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;






//     <div className="container">
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>} />
//         <Route path='/post/:postId' element={<PostDetail/>} />
//         <Route path='/create-post' element={<CreatePost/>} />
//         <Route path='*' element={<NoPage/>} />
//       </Routes>
//     </div>
//   );
// }
