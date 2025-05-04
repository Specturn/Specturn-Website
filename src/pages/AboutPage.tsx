import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - Specturn';
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Specturn</h1>
            <p className="text-xl text-blue-100">
              We're a team of passionate designers and developers creating exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2020, Specturn was born from a passion for creating beautiful, functional websites that help businesses succeed online. What started as a small team of freelancers has grown into a full-service web design and development agency serving clients across various industries.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our journey has been defined by a commitment to excellence, innovation, and client satisfaction. We believe that great design is about more than aesthetics—it's about creating meaningful experiences that connect businesses with their audiences.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to push the boundaries of web design and development, staying at the forefront of industry trends and technologies to deliver cutting-edge solutions for our clients.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team working together" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <p className="text-lg font-bold text-blue-600 mb-2">5+ Years</p>
                <p className="text-gray-600">Creating digital experiences that inspire</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide our work and define who we are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from design and development to client communication and support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace creativity and innovation, continuously exploring new technologies and approaches to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of collaboration, working closely with our clients to understand their needs and deliver tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              How we turn your vision into reality.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
            
            <div className="space-y-12 relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 text-center md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">01. Discovery</h3>
                  <p className="text-gray-600">
                    We start by understanding your business, goals, and target audience to create a strategy that aligns with your vision.
                  </p>
                </div>
                <div className="z-10 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="font-bold">1</span>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="z-10 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="font-bold">2</span>
                </div>
                <div className="md:w-1/2 md:pl-12 text-center md:text-left mt-6 md:mt-0">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">02. Planning</h3>
                  <p className="text-gray-600">
                    We create detailed wireframes and prototypes to visualize the project and refine the user experience before development.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 text-center md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">03. Design & Development</h3>
                  <p className="text-gray-600">
                    Our designers and developers work collaboratively to bring the project to life with attention to detail and quality.
                  </p>
                </div>
                <div className="z-10 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="font-bold">3</span>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="z-10 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="font-bold">4</span>
                </div>
                <div className="md:w-1/2 md:pl-12 text-center md:text-left mt-6 md:mt-0">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">04. Testing & Launch</h3>
                  <p className="text-gray-600">
                    We thoroughly test the website to ensure it works flawlessly across all devices before launching it to the world.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 text-center md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">05. Ongoing Support</h3>
                  <p className="text-gray-600">
                    Our relationship doesn't end at launch. We provide ongoing support and maintenance to ensure your website continues to perform at its best.
                  </p>
                </div>
                <div className="z-10 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="font-bold">5</span>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8">
              Let's turn your vision into reality. Contact us today to discuss your project.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;