// Doble.jsx
import "two-up-element"; 
//npm install two-up-element 
//Esto es lo que se actualizo agregue esta pagina

export default function Doble() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '70px'}}>
        <two-up >
            <img src="/doble1.jpg" alt="Imagen Antes" style={{ maxWidth: '800px', maxHeight: '800px', width: '100%'}}/>
            <img src="/doble2.jpg" alt="Imagen Después" style={{ maxWidth: '800px', maxHeight: '800px', width: '100%'}}/>
        </two-up>
    </div>
  );
}