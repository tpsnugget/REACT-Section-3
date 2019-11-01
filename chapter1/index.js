class App extends React.Component {
   render() {
      return (
         <div>
            {/* It is traditional to use double quotes here " " */}
            <Hello
               to="Ringo"
               from="Paul"
               bangs={3}
            />
            <Hello to="Michael" from="Stephen" />
         </div>
      )
   }
}

ReactDOM.render(<App />, document.getElementById('root'))