import ImageCarousel from "./ImageCarousel";

export default function Carousel() {
  const images = [
    "/images/imagen1.jpg",
    "/images/imagen2.jpg",
    "/images/imagen3.jpg",
    // Agrega más imágenes según sea necesario
  ];
  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
}