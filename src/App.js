import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import NBAlist from './components/NBAlist';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NBAlist/>
      </div>
    </Provider>
  );
}

export default App;




// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// function App() {
//   return (
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

// export default App;