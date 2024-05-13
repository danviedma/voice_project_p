"use client";

import React, { useEffect } from "react";
export default function MainCenter(){
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                }
            });
        }, { threshold: 0.1 }); // Ajusta el threshold según tus necesidades

        const images = document.querySelectorAll('.transition-opacity');
        images.forEach((img) => observer.observe(img));

        return () => {
            images.forEach((img) => observer.unobserve(img));
        };
    }, []);
    return (
        <div className="text-custom-dark m-auto">
            <div className="flex m-auto md:px-32 pt-6 md:py-14 flex-col md:flex-row">
                <div className="w-4/5 mx-auto md:w-2/3 md:mx-0">
                    <h2 className="text-2xl font-bold">Titulo</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga harum autem eaque ipsum error atque quas illum sapiente eveniet eos dolor, totam blanditiis facere. Doloremque quidem aliquam delectus labore aperiam.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga harum autem eaque ipsum error atque quas illum sapiente eveniet eos dolor, totam blanditiis facere. Doloremque quidem aliquam delectus labore aperiam.</p>
                </div>
                <div className="ml-24">
                    {/* <img src="/images/paloma.jpg" alt="" /> */}
                    {/* <img src="/images/paloma.jpg" alt="" className="opacity-0 transition-opacity duration-1000" /> */}
                    <img src="/images/letra_japones.PNG" alt="" className="hidden md:block opacity-0 transition-opacity duration-1000" />
                </div>
            </div>
            <div className="flex md:px-20 md:py-14 flex-col md:flex-row m-auto">
                <div>
                    {/* <img src="/images/paloma2.jpg" alt="" className="w-1/3"/> */}
                    <img src="/images/paloma.jpg" alt="" className="hidden md:block opacity-0 transition-opacity duration-1000" />
                </div>
                <div className="w-4/5 m-auto pt-6">
                    <h3 className="text-2xl font-bold">Titulo</h3>
                    <p className="md:pr-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam corporis consequuntur in libero nam id nostrum ipsam sed cupiditate odio, commodi accusantium est possimus? Dolorem sint quasi labore aperiam unde.</p>
                    <p className="md:pr-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta eius repellat harum delectus, doloribus suscipit corrupti facere, praesentium nulla animi doloremque nobis earum reprehenderit aut incidunt reiciendis, itaque qui.</p>
                </div>
            </div>
        </div>
    );
}