import { CssBaseline} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { ConfigInput } from './components/ConfigInput/ConfigInput';
import { ButtonChoice } from './components/ButtonChoice/ButtonChoice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigCard } from './components/ConfigCard/ConfigCard';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0e0e0f'
    },
    text: {
      primary: '#e6e4e3',
      secondary: '#cfccca'
    }
  },
});

function App() {
  return (
    <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline/>
          <Routes>
            <Route path="/" element={<ButtonChoice/>}/>
            <Route path="config" element={<ConfigInput/>}/>
            <Route path="layout" element={<ConfigCard/>}/>
          </Routes> 
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
