import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from "./componentes/Header/Header"
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {


  const [mostrarFormulario, actualizarMostrar] = useState (false)
  const [colaboradores, actualizarColaboradores] = useState([

    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://media.licdn.com/dms/image/C4D03AQHOIpYllPQhrg/profile-displayphoto-shrink_200_200/0/1600526972652?e=1687996800&v=beta&t=LUe9tzhTXVIjuPi7f5b3nWSZKwCtb5N0HxOtWlq4yDU",
      nombre: "Carlos Alfredo de la Cruz Alvarado",
      puesto: "Desarrollador"}

  ])

  const [Equipos, actualizarEquipos] = useState (

    //Lista de equipos

    [{
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
      fav:true
    },

    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },

    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },]
       

  )

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) =>{
    //Spread operator [...]
    actualizarColaboradores([...colaboradores, colaborador])
  }  

//Eliminar colaborador

const eliminarColaborador = (id) =>{

  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
  actualizarColaboradores(nuevosColaboradores)
}


//Actualizar color de equipo
const actualizarColor = (color, id) => {
  console.log("Actualizar: ", color, id)
  const equiposActualizados = Equipos.map((equipo) => {
    if (equipo.id === id) {
      equipo.colorPrimario = color
    }





    return equipo
  })

  actualizarEquipos(equiposActualizados)
}

const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...Equipos, {...nuevoEquipo, id:uuid()}])
}

const like = (id) =>{
  const colaboradoresActualizados = colaboradores.map ((colaborador) =>{
    if (colaborador.id=== id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })

  actualizarColaboradores(colaboradoresActualizados)
}


  //Ternario --> condición ? seMuestra : noSeMuestra

  // condición && seMuestra

  return (
    <div>
      <Header />
      {/* {mostrarFormulario === true ? <Formulario /> : <div></div>} */}
      {/* {mostrarFormulario === true ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario equipos={Equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador = {registrarColaborador}
      crearEquipo={crearEquipo}   
      />}
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        Equipos.map((equipo) => <Equipo
        datos={equipo}
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        //like={like}
      />)
      }

      <Footer />
    </div>
  );
}

export default App;
