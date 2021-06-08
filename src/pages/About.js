import '../styles/App.css'

function About(props) {
  return (
    <div className="App">
      <header className="App-header">
        {console.log(props)}
        <p> Esta é uma breve descrição sobre mim mesmo! </p>
        <p> Eu me chamo {props.user.personalInfo.name} e atuo profissionalmente como {props.user.employerInfo.carrer} </p>
      </header>
    </div>
  );
}

export default About;
