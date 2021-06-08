import React from "react"
import '../styles/App.css'


class About extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      userName: ''
    }
    this.changeUserName = this.changeUserName.bind(this)
    this.handleChangeName  = this.handleChangeName.bind(this)
  }

  changeUserName(event) {
    this.setState({ userName: event.target.value })
  }

  handleChangeName() {
    this.props.updateUserName(this.state.userName)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {console.log(this.props)}
          <p> Esta é uma breve descrição sobre mim mesmo! </p>
          <p> Eu me chamo {this.props.user.personalInfo.name} e atuo profissionalmente como {this.props.user.employerInfo.carrer} </p>
          <div>
            <h1> Mudar nome do usuário </h1>
            <div>
              <input type="text" placeholder="digite o novo usuário" onChange={this.changeUserName} value={this.state.userName}></input>
              <button type="button" onClick={this.handleChangeName}>Mudar Nome</button>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
export default About;
