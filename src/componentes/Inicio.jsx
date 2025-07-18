import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import slide1 from "../assets/rotar1.jpg";
import slide2 from "../assets/rotar2.jpg";
import slide3 from "../assets/rotar3.jpg";
import slide4 from "../assets/rotar4.jpg";
export default function Inicio() {
  return (
    <>
      <Container className="my-4">
        <Carousel
          fade
          style={{ height: "400px", maxHeight: "400px" }} /* ← alto fijo */
        >
          {[slide1, slide2, slide3, slide4].map((src, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={src}
                alt={`Slide ${i + 1}`}
                style={{
                  height: "400px" /* ← coincide con carrusel */,
                  objectFit: "cover" /* recorta sin deformar    */,
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      <Container className="p-5 mb-3 shadow background-box">
        <p className="letter">🍽️ Bienvenido a tu espacio saludable y sabroso:

Creemos que comer bien no solo se trata de nutrientes, sino de experiencias, emociones y decisiones conscientes que transforman tu bienestar físico y mental. Esta página ha sido creada con pasión por la salud, el movimiento y el sabor, pensando en personas como tú que buscan cuidarse sin renunciar al placer de una buena comida.

Aquí encontrarás mucho más que instrucciones culinarias. Nuestro enfoque fusiona tecnología con nutrición para entregarte recetas equilibradas, adaptadas a tus objetivos —ya sea ganar masa muscular, mejorar tu digestión, controlar tus niveles de energía, o simplemente disfrutar platos deliciosos y funcionales.

🥗 ¿Qué puedes descubrir?

Recetas personalizadas por tipo de dieta (vegetariana, baja en carbohidratos, alta en proteína, keto, etc.).

Información nutricional clara y visual en cada preparación.

Integración con tu perfil de salud: recomendación de platos según tus metas y actividades físicas.

Consejos de expertos en nutrición y entrenamiento físico para acompañarte en tu camino.

Opciones rápidas, económicas y con ingredientes accesibles para el día a día.

Secciones interactivas para guardar tus favoritas y compartir con tu comunidad.

✨ Nos apoyamos en datos reales, tecnología avanzada y el entusiasmo de un equipo comprometido con el bienestar para que cada receta que ves aquí tenga un propósito: nutrirte, inspirarte y acompañarte.

Tu salud se cocina desde la elección que haces cada día. Y aquí, esas elecciones comienzan con sabor. ¿Listo para cocinar tu mejor versión? 🍳

Si quieres, también puedo ayudarte a escribir una versión más informal, una presentación para redes o incluso una intro hablada para un video. ¿Te interesa? 😄</p>
      </Container>
    </>
  );
}
