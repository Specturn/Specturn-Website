import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-16 h-16 bg-blue-100 rounded-br-full flex items-center justify-center">
        <Quote className="text-blue-500 rotate-180" size={24} />
      </div>
      
      <div className="px-4 py-12 md:py-16">
        <div 
          className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-700 mb-6 italic">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex items-center justify-center mb-6">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].company}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-center items-center mt-6">
          <button 
            onClick={goToPrev}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mr-4"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={16} />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={goToNext}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none ml-4"
            aria-label="Next testimonial"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;