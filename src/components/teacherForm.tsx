import React, { useState } from 'react';

const TeacherForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cv: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prevState => ({
      ...prevState,
      cv: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar formData a tu servidor utilizando fetch o alguna librería como axios
    console.log(formData);
  };

  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:'center', flexDirection: 'column'}} className="App">
      <h2>Completa este formulario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="cv">Cargar CV (PDF):</label>
          <input type="file" id="cv" name="cv" accept=".pdf" onChange={handleFileChange} />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default TeacherForm;
