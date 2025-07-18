import React from 'react';

function ListaRecetas({ receta, onDelete, onEdit }) {
  return (
    <div className="container mt-5">
      <h2>Lista de Recetas</h2>
      <hr />

      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Steps</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {receta.map((product, index) => (
            <tr key={index} className='background-box'>
              <td>{product.name}</td>
              <td>
              <strong>Ingrediente 1</strong><br />
              Nombre: {product.ingredient1.nombre1}<br />
              Descripción: {product.ingredient1.descripcion1}<br />
              Cantidad: {product.ingredient1.cantidad1}<br /><br />
              <strong>Ingrediente 2</strong><br />
              Nombre: {product.ingredient2.nombre2}<br />
              Descripción: {product.ingredient2.descripcion2}<br />
              Cantidad: {product.ingredient2.cantidad2}<br /><br />
              <strong>Ingrediente 3</strong><br />
              Nombre: {product.ingredient3.nombre3}<br />
              Descripción: {product.ingredient3.descripcion3}<br />
              Cantidad: {product.ingredient3.cantidad3}
              </td>
              <td>
              -{product.step1}<br /><br />
              -{product.step2}<br /><br />
              -{product.step3}
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm me-2 ms-2"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning btn-sm me-2 ms-2"
                  onClick={() => onEdit(index)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaRecetas;