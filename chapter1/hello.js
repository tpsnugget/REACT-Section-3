class Hello extends React.Component{
   render() {
      const p = this.props
      let bangs = "!".repeat(p.bangs)
      let moreBangs = ""

      return(
         <h1>Hello {p.to}, from {p.from} {bangs}</h1>
      )
   }
}