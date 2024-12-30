import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Layout from "./components/Layout";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";
import VideoPage from "./Pages/VideoPage";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="507081866530-b16edc3mp43j8sb43tpotrdm976mrgr7.apps.googleusercontent.com">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/video/:videoId" element={<VideoPage />} />
          </Routes>
        </Layout>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
