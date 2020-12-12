import './App.css';
import Customers from './Components/Customers';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Trainings from './Components/Trainings';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import { ThemeProvider } from '@material-ui/styles';
import Calendar from './Components/Calendar';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: green,
  },
});

function App() {
 
  return (
   
    <div className="App">
 <ThemeProvider theme={theme}>

      <AppBar position="static" color="secondary">
        <Toolbar>
        
          <Typography variant="h6" >
           
Anne-Mari's training service
          </Typography>
         
        </Toolbar>
      </AppBar>
      <BrowserRouter>
<div>

<Tab label="Customers" to="/" component={Link} />
<Tab label="Trainings" to="/Trainings" component={Link} />
<Tab label="Calendar" to="/Calendar" component={Link} />


<Switch>

 <Route exact path="/" component={Customers} /> 
 <Route exact path="/Trainings" component={Trainings} /> 
 <Route exact path="/Calendar" component={Calendar} /> 

</Switch>

</div>

</BrowserRouter>
</ThemeProvider>
    </div>
  );
}

export default App;
