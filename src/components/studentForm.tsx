import React from "react";

const StudentForm = () => {
  function Submit(_e) {
    const formEle = document.querySelector("form");
    if (formEle) { // Asegúrate de que formEle no sea null
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
    } else {
      console.log("El formulario no se encontró en el DOM.");
    }
  }
  
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', flexDirection: 'column' }} className="App">
      <h1>Variable X</h1>
      <h2>Completa este formulario de inscripción</h2>
      <hr />
      <h3>Formulario con Google Spreadsheet como BD</h3>
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Ingrese su nombre" name="Name" type="text" /><br />
          <input placeholder="Ingrese su correo electrónico" name="Email" type="text" /><br />
          <input placeholder="Ingrese su mensaje" name="Message" type="text" /><br /><br />
          <input name="Name" type="submit" style={{ backgroundColor: '#213547', color: 'white' }} />
        </form>
      </div>
    </div>
  );
}

export default StudentForm;
