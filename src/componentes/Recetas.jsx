import { useState } from "react";
import ListaRecetas from "./ListaRecetas";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import "../receta.css";

function Receta() {
  const [receta, setReceta] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [name, setName] = useState("");
  const[ingredient1,setIngredient1] = useState({nombre1 : '', descripcion1 : '', cantidad1 : ''});
  const[ingredient2,setIngredient2] = useState({nombre2 : '', descripcion2 : '', cantidad2 : ''});
  const[ingredient3,setIngredient3] = useState({nombre3 : '', descripcion3 : '', cantidad3 : ''});
  const[step1,setStep1] = useState("");
  const[step2,setStep2] = useState("");
  const[step3,setStep3] = useState("");

  const saveReceta = () => {
    if (editingIndex !== null) {
      const updatedProduct = { name, ingredient1, ingredient2, ingredient3, step1, step2, step3 };
      const updatedreceta = [...receta];
      updatedreceta[editingIndex] = updatedProduct;
      setReceta(updatedreceta);

      setEditingIndex(null);

      Swal.fire({
        title: "Listo!!!",
        icon: "Hecho!!!",
        text: "Tu receta se ha actualizado!!!",
        draggable: true,
      });
    } 
    else {
      setReceta([...receta, {name, ingredient1, ingredient2, ingredient3, step1, step2, step3} ]);

      Swal.fire({
        title: "Listo!!!",
        icon: "Hecho!!!",
        text: "Receta Guardada!",
        draggable: true,
      });
    }
    setName("");
    setIngredient1({ nombre1: '', descripcion1: '', cantidad1: '' });
    setIngredient2({ nombre2: '', descripcion2: '', cantidad2: '' });
    setIngredient3({ nombre3: '', descripcion3: '', cantidad3: '' });
    setStep1("");
    setStep2("");
    setStep3("");
  };

  const deleteReceta = (index) => {
    console.log("eliminar desde ListaRecetas");
    console.log(index);
    Swal.fire({
      title: "Estas seguro?",
      text: "No podras revertir este cambio!",
      icon: "ADVERTENCIA",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borralo!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (index >= 0) {
          const updatedreceta = receta.filter((_, i) => i !== index);
          setReceta(updatedreceta);
        }
        Swal.fire({
          title: "Borrado!!!",
          text: "Tu receta ha sido borrada.",
          icon: "Hecho!!!",
        });
      }
    });
  };
  const handleEdit = (index) => {
    console.log("editar desde ListaRecetas");
    console.log(index);
    const productToEdit = receta[index];
    setName(productToEdit.name); 
    setIngredient1(productToEdit.ingredient1);
    setIngredient2(productToEdit.ingredient2);
    setIngredient3(productToEdit.ingredient3);
    setStep1(productToEdit.step1);
    setStep2(productToEdit.step2);
    setStep3(productToEdit.step3);
    setEditingIndex(index);
  }
  return (
    <div className="container mt-5">
      <h1 className="text-center mt-5 mb-4 letter">MI CREA RECETAS</h1>
      <br />
      <br />
      <div className="row">
        <div className="col">
          <form>
            <h3 className="letter">Nombre de la Receta</h3>
            <hr />
            <div className="p-5 mb-3 shadow background-box">
            <h5 className="letter">Nombre</h5>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            </div>
            <br />
            <h3 className="letter">Ingredientes</h3>
            <hr />
            
            <div className="p-5 mb-3 shadow background-box">
            <div className="row">
            <h3 className="letter">Ingrediente 1</h3>
            <br />
              <div className="col-md-4 mb-5">
                <h5 className="letter">Nombre</h5>
                <input id="nombre1" rows="3" col="3" class="form-control" placeholder="Ingrese nombre del ingrediente" value={ingredient1.nombre1} onChange={(e) => setIngredient1({ ...ingredient1, nombre1: e.target.value })}/>
              </div>
                <br />
              <div className="col-md-4 mb-5">
                <h5 className="letter">Descripcion</h5>
                <input id="descripcion1" rows="3" col="3" class="form-control" placeholder="Ingrese descripcion del ingrediente" value={ingredient1.descripcion1} onChange={(e) => setIngredient1({ ...ingredient1, descripcion1: e.target.value })}/>
              </div>
                <br />
              <div className="col-md-4 mb-5">
                <h5 className="letter">Cantidad</h5>
                <input id="cantidad1" rows="3" col="3" class="form-control" placeholder="Ingrese cantidad del ingrediente" value={ingredient1.cantidad1} onChange={(e) => setIngredient1({ ...ingredient1, cantidad1: e.target.value })}/>
              </div>
              
            <br />

            <h3 className="letter">Ingrediente 2</h3>
            <br />
              <div className="col-md-4 mb-2">
                <h5 className="letter">Nombre</h5>
                <input id="nombre2" rows="3" col="3" class="form-control" placeholder="Ingrese nombre del ingrediente" value={ingredient2.nombre2} onChange={(e) => setIngredient2({ ...ingredient2, nombre2: e.target.value })}/>
              </div>
                <br />
              <div className="col-md-4 mb-2">
                <h5 className="letter">Descripcion</h5>
                <input id="descripcion2" rows="3" col="3" class="form-control" placeholder="Ingrese descripcion del ingrediente" value={ingredient2.descripcion2} onChange={(e) => setIngredient2({ ...ingredient2, descripcion2: e.target.value })}/>
              </div>
                <br />
              <div className="col-md-4 mb-2">
               <h5 className="letter">Cantidad</h5>
                <input id="cantidad2" rows="3" col="3" class="form-control" placeholder="Ingrese cantidad del ingrediente" value={ingredient2.cantidad2} onChange={(e) => setIngredient2({ ...ingredient2, cantidad2: e.target.value })}/>
                <br />
              </div>

            <h3 className="letter">Ingrediente 3</h3>
            <br />
              <div className="col-md-4 mb-2">
                <h5 className="letter">Nombre</h5>
                <input id="nombre3" rows="3" col="3" class="form-control" placeholder="Ingrese nombre del ingrediente" value={ingredient3.nombre3} onChange={(e) => setIngredient3({ ...ingredient3, nombre3: e.target.value })}/>
              </div>
                <br />
              <div className="col-md-4 mb-2">
                <h5 className="letter">Descripcion</h5>
                <input id="descripcion3" rows="3" col="3" class="form-control" placeholder="Ingrese descripcion del ingrediente" value={ingredient3.descripcion3} onChange={(e) => setIngredient3({ ...ingredient3, descripcion3: e.target.value })}/>
              </div>
                <br />
              <div className="col-md-4 mb-2">
                <h5 className="letter">Cantidad</h5>
                <input id="cantidad3" rows="3" col="3" class="form-control" placeholder="Ingrese cantidad del ingrediente" value={ingredient3.cantidad3} onChange={(e) => setIngredient3({ ...ingredient3, cantidad3: e.target.value })}/>
                </div>
                <br />
              </div>
            </div>
            <br />
            <h3 className="letter">Pasos</h3>
            <hr />
            <div className="p-5 mb-3 shadow background-box">
            <h5 className="letter">Paso 1</h5>
            <textarea id="iddescripcion1" rows="3" col="3" class="form-control" placeholder="Describa el paso a seguir" value={step1} onChange={(e) => setStep1(e.target.value)}></textarea>
            <br />
            <h5 className="letter">Paso 2</h5>
            <textarea id="iddescripcion2" rows="3" col="3" class="form-control" placeholder="Describa el paso a seguir" value={step2} onChange={(e) => setStep2(e.target.value)}></textarea>
            <br />
            <h5 className="letter">Paso 3</h5>
            <textarea id="iddescripcion3" rows="3" col="3" class="form-control" placeholder="Describa el paso a seguir" value={step3} onChange={(e) => setStep3(e.target.value)}></textarea>
            </div>
            <br />
            <button
              type="button"
              style={{fontSize: "1.2rem",     
              padding: "12px 24px",  
              borderRadius: "8px",   
              backgroundColor: "#34495e",
              color: "#fff"}}
              className="btn btn-sm btn-lg"
              onClick={saveReceta}
            >
              Enviar
            </button>
          </form>
        </div>

        <ListaRecetas
          receta={receta}
          onDelete={deleteReceta}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default Receta;
