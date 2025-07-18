// Doble.jsx
import "two-up-element"; 
//npm install two-up-element 
//Esto es lo que se actualizo agregue esta pagina

export default function Doble() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '180px'}}>
        <two-up >
            <img src="https://img.freepik.com/foto-gratis/vista-arriba-mesa-llena-comida_23-2149209253.jpg" alt="Imagen Antes" style={{ maxWidth: '800px', maxHeight: '800px', width: '100%'}}/>
            <img src="https://img.freepik.com/foto-gratis/variedad-platos-deliciosa-comida-brasilena_23-2148739179.jpg?semt=ais_hybrid&w=740" alt="Imagen Después" style={{ maxWidth: '800px', maxHeight: '800px', width: '100%'}}/>
        </two-up>
    </div>
  );
}