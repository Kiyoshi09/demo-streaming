import './App.css';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';

import Route from "./components/Route";
import HomePage from "./pages/HomePage";
import AuthenticatedPage from "./pages/AuthenticatedPage";


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

Amplify.configure({
  Auth: {
    identityPoolId: 'ap-northeast-1:1cf5676b-aa4d-41c3-93b2-65f8fe846679',
    region: 'ap-northeast-1',
    userPoolId: 'ap-northeast-1_lm7TkMIqA',
    userPoolWebClientId: '4oqbglv93c703lditfscc641m8',
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Route path="/">
          <HomePage />
        </Route>

        <Route path="/auth">
          <AuthenticatedPage />
        </Route>

        <Route path="/auth/videolist">
          <AuthenticatedPage />
        </Route>

        <Route path="/auth/videolist/home">
          <AuthenticatedPage />
        </Route>

        <Route path="/auth/videolist/movie">
          <AuthenticatedPage />
        </Route>

        <Route path="/auth/videolist/tv">
          <AuthenticatedPage />
        </Route>

        <Route path="/auth/videolist/new">
          <AuthenticatedPage />
        </Route>

        <Route path="/auth/videolist/mylist">
          <AuthenticatedPage />
        </Route>

    </ThemeProvider>
  );
}

export default App;
