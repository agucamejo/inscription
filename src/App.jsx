import "./index.css";

export default function App() {
  // eslint-disable-next-line no-unused-vars
  function Submit(_e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbzTtFx4gtHcS1xjN4ntKOhIxygezvycp84FBUY-jYL02Ao-2afr14irAxwpTwI1xj1f/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:'center', flexDirection: 'column'}} className="App">
        <h1>Variable X</h1>
       <h2>Completa este formulario de inscripción</h2>
       <h3>Google Form Embebido</h3>
       <iframe title="Inscription Form" src="https://docs.google.com/forms/d/e/1FAIpQLSfSuRoCJ1lYT9ZHsMwjsNub5YpOFySKNGYJ8Rt-U4-sG1Tf1w/viewform?embedded=true"  width="100%"
        style={{ maxWidth: 800, borderRadius: '8px', boxShadow: '0px 1px 5px 1px rgba(160,160,160,1)' }} height="580" frameBorder={0} marginHeight={0} marginWidth={0}>Cargando…</iframe>
       <hr />
       <h3>Redirigir al Google Form</h3>
       <p>Si deseas continuar con el formulario de inscripción, haga <a href='https://forms.gle/6Xc7uhV8XyfVNsp1A' target='_blank' rel='noopener'>click aquí</a></p>

        <hr />
       <h3>Completar formulario con Google Spreadsheet como BD</h3>
       <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Ingrese su nombre" name="Name" type="text" /><br />
          <input placeholder="Ingrese su correo electrónico" name="Email" type="text" /><br />
          <input placeholder="Ingrese su mensaje" name="Message" type="text" /><br /><br />
          <input name="Name" type="submit" style={{backgroundColor:'#213547', color:'white'}}/>
        </form>
      </div>
    </div>
  );
}
