import React,{useState} from "react";
import "./App.css";
import {Grid,Header,Form,Button,Segment} from "semantic-ui-react";
const App=()=>{
      const [counter, setCounter] = useState(0)
     
      const increase=()=>{
          setCounter(counter + 1)
      }
      const decrease=()=>{
          setCounter(counter - 1)
      }
      
  return(
      <Grid style={{height:"99vh"}} verticalAlign="middle">
          <Grid.Row centered>
  <Grid.Column width="5"  verticalAlign="middle">
      <Header as={"h2"} >
          Counter
      </Header>
     <p size="large" >{counter}</p> 
      <Form size="large">
        <Segment color="red">
           
            <Button color={"green"} onClick={increase} >Increment</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button color={"red"} onClick={decrease} disabled={counter<=0} >Decrement</Button>
        </Segment>
    </Form>  
    <p>ASSIGNMENT DONE BY: PAMURU JAHNAVI REGISTRATION NUMBER:12016416 </p>     
      </Grid.Column>
  </Grid.Row> 
  
      </Grid>
      

  
  )
}
export default App;


