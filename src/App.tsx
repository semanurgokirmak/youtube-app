import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./components/AuthContext";
import Layout from "./components/Layout";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";
import VideoPage from "./Pages/VideoPage";
import LikedPage from "./Pages/LikedPage";
import SearchBar from "./components/SearchBar";
import SearchResultsPage from "./Pages/SearchResultPage";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="507081866530-b16edc3mp43j8sb43tpotrdm976mrgr7.apps.googleusercontent.com">
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/video/:videoId" element={<VideoPage />} />
              <Route path="/likedvideos" element={<LikedPage />} />
              <Route path="/search" element={<SearchBar />} />
              <Route path="/search-results" element={<SearchResultsPage />} />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
