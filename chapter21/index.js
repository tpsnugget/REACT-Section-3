class App extends React.Component {
   render(){
      return(
         <div>
            <Friend  
            name="Elton"
            hobbies = {["Piano", "Singing", "Dancing"]}/>

            <Friend  
            name="Sally"
            hobbies = {["Motorcycles", "Drinking beer", "Arm wrestling"]}/>
         </div>
      )
   }
}

ReactDOM.render(<App />, document.getElementById("root"))