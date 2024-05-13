import ImageCarousel from "./ImageCarousel";

export default function CarouselJob() {
  const images = [
    "/images/imagen7.jpg",
    "/images/imagen8.jpg",
    "/images/imagen9.jpg",
    // Agrega más imágenes según sea necesario
  ];
  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
}