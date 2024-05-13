import ImageCarousel from "./ImageCarousel";

export default function CarouselAbout() {
  const images = [
    "/images/imagen4.jpg",
    "/images/imagen5.jpg",
    "/images/imagen6.jpg",
    // Agrega más imágenes según sea necesario
  ];
  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
}