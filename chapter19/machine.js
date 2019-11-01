class Machine extends React.Component {
   render (){
      const {s1, s2, s3} = this.props

      if (s1 === s2 && s1 === s3){
         return (
            <div>
               <p>{s1} {s2} {s3}</p>
               <p>You Win!</p>
            </div>
         )
      }
      else {
         return (
            <div>
               <p>{s1} {s2} {s3}</p>
               <p>You LOSE :(</p>
            </div>
         )
      }

   }
}