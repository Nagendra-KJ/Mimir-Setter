import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { ConfigInput } from './components/ConfigInput/ConfigInput';

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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="cemter"
        minHeight="100vh">
          <ConfigInput/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
