
import React, { useEffect, useState } from 'react';
import testimoniosData from '../../data/testimonios.json';

const Testimonials = () => {
  const [testimonios, setTestimonios] = useState([]);

  useEffect(() => {
    const shuffledTestimonios = testimoniosData.sort(() => 0.5 - Math.random());
    setTestimonios(shuffledTestimonios);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {testimonios.map((testimonio) => (
        <div key={testimonio.id} className="border rounded-lg p-6 shadow-md">
          <p className="text-gray-700 mb-4">{testimonio.texto}</p>
          <h4 className="text-lg font-semibold text-right">{testimonio.nombre}</h4>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
  
