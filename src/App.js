import { useState } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Button, Grid, MenuItem, Switch } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'
import Main from './components/Main';
import Select from './components/useSelect';
import NativeSelect from './components/MultipleSelect';
import Greet from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import FunctionalClick from './components/FunctionalClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import InputField from './components/InputField/InputField';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/appStyles.css';
import Styles from './components/appStyles.module.css';
import Form from './components/Form';
import BasicForm from './components/BasicForm';
import FragmentsDemo from './components/FragmentsDemo';
import Table from './components/Table';


const initialValue={
  messageValue:'',
}

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];


function App() {
  const [theme, setTheme] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);
  
  console.log(selectedOption)

  const darkTheme = createTheme({
    palette: {
      mode:theme? "dark":"light",
    },
  });
  const handleChange = (event) => {
    setTheme(event.target.checked);
  }
  const handleChange2=(event)=>{
    let target1=event.target.value;
    let msg=document.getElementById('#message');
    // console.log(msg)
    setSelectedOption(target1);
    msg.innerHTML+=target1;
  }

  
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Main/>
        <label>{darkTheme.palette.mode} mode</label>
        {<Switch
          checked={theme}
          color='success'
          onChange={handleChange} />}

        <textarea rows={12} onChange={handleChange2} id="message"/>
        <Grid container spacing={4}>
          <Grid item xs={6} ml={2}>
            {/*<Select
              native
              multiple
              label="Select an option"
              options={options}
              value={selectedOption}
              onChange={handleOptionChange}
            />*/}
            {<NativeSelect
          />}
          <Select onChange={handleChange2}>
            {options.map((item,index)=>(
              <option key={index} value={item.value}>{item.label}</option>
            ))}
          </Select>
          <Greet name="Rahul" heroName="Iron Man">
              <p>Lorem</p>
          </Greet>
          <Greet name="Shivam" heroName="Captain America">
              <button>Add</button>
          </Greet>
          <Greet name="Saurabh" heroName="Ant Man"/>
            <Message/>
            <Counter/>
            <Welcome name="Rohit" heroname="Bat Man"/>
            <FunctionalClick/>
            <ClassClick/>
            <EventBind/>
            <ParentComponent/>
            <UserGreeting/>
            <NameList/>


            <Stylesheet primary={true}/>
            <Stylesheet primary={false} />

            <Inline/>


            <h1 className='error'>Error</h1>
            <h1 className={Styles.success}>Success</h1>

            <Form/>

            <BasicForm/>

            <FragmentsDemo/>

            <Table/>

          </Grid>
        </Grid>
      </ThemeProvider>

    </div>
  );
}

export default App;
