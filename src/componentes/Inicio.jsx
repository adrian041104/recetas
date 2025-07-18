import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

export default function Inicio() {
  // Define the image URLs as an array of strings
  const slideImages = [
    "https://c4.wallpaperflare.com/wallpaper/997/782/414/carne-chino-comidas-plato-wallpaper-preview.jpg",
    "https://www.dzoom.org.es/wp-content/uploads/2019/04/fotografia-de-comida-platos7-810x540.jpg",
    "https://c4.wallpaperflare.com/wallpaper/776/25/162/asado-cocina-comida-ingredientes-wallpaper-preview.jpg",
    "https://www.itl.cat/pngfile/big/147-1470077_meal-hd-wallpaper.jpg",
  ];

  return (
    <>
      <Container className="my-4">
        <Carousel
          fade
          style={{ height: "400px", maxHeight: "400px" }} /* ← alto fijo */
        >
          {slideImages.map((src, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={src} // Use the URL directly here
                alt={`Slide ${i + 1}`}
                style={{
                  height: "400px" /* ← coincide con carrusel */,
                  objectFit: "cover" /* recorta sin deformar     */,
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      <Container className="p-5 mb-3 shadow background-box">
        <p className="letter">
          🍽️ Bienvenido a tu espacio saludable y sabroso:
          <br />
          <br />
          Creemos que comer bien no solo se trata de nutrientes, sino de
          experiencias, emociones y decisiones conscientes que transforman tu
          bienestar físico y mental. Esta página ha sido creada con pasión por
          la salud, el movimiento y el sabor, pensando en personas como tú que
          buscan cuidarse sin renunciar al placer de una buena comida.
          <br />
          <br />
          Aquí encontrarás mucho más que instrucciones culinarias. Nuestro
          enfoque fusiona tecnología con nutrición para entregarte recetas
          equilibradas, adaptadas a tus objetivos —ya sea ganar masa muscular,
          mejorar tu digestión, controlar tus niveles de energía, o simplemente
          disfrutar platos deliciosos y funcionales.
          <br />
          <br />
          🥗 ¿Qué puedes descubrir?
          <br />
          <br />
          Recetas personalizadas por tipo de dieta (vegetariana, baja en
          carbohidratos, alta en proteína, keto, etc.).
          <br />
          <br />
          Información nutricional clara y visual en cada preparación.
          <br />
          <br />
          Integración con tu perfil de salud: recomendación de platos según tus
          metas y actividades físicas.
          <br />
          <br />
          Consejos de expertos en nutrición y entrenamiento físico para
          acompañarte en tu camino.
          <br />
          <br />
          Opciones rápidas, económicas y con ingredientes accesibles para el
          día a día.
          <br />
          <br />
          Secciones interactivas para guardar tus favoritas y compartir con tu
          comunidad.
          <br />
          <br />
          ✨ Nos apoyamos en datos reales, tecnología avanzada y el entusiasmo
          de un equipo comprometido con el bienestar para que cada receta que
          ves aquí tenga un propósito: nutrirte, inspirarte y acompañarte.
          <br />
          <br />
          Tu salud se cocina desde la elección que haces cada día. Y aquí, esas
          elecciones comienzan con sabor. ¿Listo para cocinar tu mejor versión?
          🍳
          <br />
          <br />
          Si quieres, también puedo ayudarte a escribir una versión más
          informal, una presentación para redes o incluso una intro hablada
          para un video. ¿Te interesa? 😄
        </p>
      </Container>
    </>
  );
}