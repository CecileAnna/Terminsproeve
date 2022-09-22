import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./routes/Welcome";
import Classes from "./routes/Classes";
import ClassesDetails from "./routes/ClassesDetails";
import Login from "./routes/Login";
import Schedule from "./routes/Schedule";
import Search from "./routes/Search";
import { Offline, Online } from "react-detect-offline";

import AllContextsProvider from "./contexts/AllContextsProvider";
import OfflinePage from "./routes/OfflinePage";

function App() {
  return (
    <>
      <Online>
        <BrowserRouter>
          <div className="App">
            <AllContextsProvider>
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="classes" element={<Classes />} />
                <Route path="classes/:id" element={<ClassesDetails />} />
                <Route path="login" element={<Login />} />
                <Route path="schedule" element={<Schedule />} />
                <Route path="search" element={<Search />} />
              </Routes>
            </AllContextsProvider>
          </div>
        </BrowserRouter>
      </Online>
      
      <Offline>
        <OfflinePage />
      </Offline>
    </>
  );
}

export default App;
