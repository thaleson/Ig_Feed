
import Header from './components/Header';
import Profile from './components/Profile';
import Feed from './components/Feed';
import { GlobalStyle, AppContainer, Content } from './styles/globalStyles';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <AppContainer>
        <Profile />
        <Content>
          <Feed />
        </Content>
      </AppContainer>
    </div>
  );
};

export default App;
