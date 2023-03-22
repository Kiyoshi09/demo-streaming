import Route from "./components/Route";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import VideoListPage from "./pages/VideoListPage";
import { ThemeProvider } from '@aws-amplify/ui-react';

import './App.css';

const theme = {
  name: 'custom-theme',
  tokens: {
    components: {
      textfield: {
        color: { value: 'var(--amplify-colors-white)' },
      },
    }
  }
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Route path="/">
          <HomePage />
        </Route>

        <Route path="/auth">
          <AuthPage />
        </Route>

        <Route path="/profile">
          <ProfilePage />
        </Route>

        <Route path="/videos">
          <VideoListPage />
        </Route>

      </div>
    </ThemeProvider>
  );
}

export default App;
