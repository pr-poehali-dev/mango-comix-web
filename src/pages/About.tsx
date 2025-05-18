
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-[#FFD23F]/10 to-transparent py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#333]">
              О проекте <span className="text-[#FF9A3C]">MangoComix</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наша миссия — сделать мир манги и комиксов доступным для всех!
            </p>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1608889476561-6242cfdbf622?ixlib=rb-4.0.3&auto=format&fit=crop&h=500&q=80" 
                alt="Коллекция манги" 
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-[#333]">
                Что такое MangoComix?
              </h2>
              <p className="text-gray-600 mb-4">
                MangoComix — это бесплатная онлайн-библиотека манги и комиксов, где каждый может найти истории на свой вкус. Мы собираем лучшие произведения разных жанров и делаем их доступными для вас без регистрации и ограничений.
              </p>
              <p className="text-gray-600 mb-6">
                Наша команда постоянно обновляет коллекцию, добавляя новые главы и тайтлы. Мы стремимся создать уютное место для всех любителей рисованных историй.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h3 className="font-semibold text-lg mb-2">Наши принципы:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Icon name="CheckCircle" className="text-green-500 mr-2 h-5 w-5" />
                    Доступность для всех без регистрации
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" className="text-green-500 mr-2 h-5 w-5" />
                    Регулярные обновления коллекции
                  </li>
                  <li className="flex items-center">
                    <Icon name="CheckCircle" className="text-green-500 mr-2 h-5 w-5" />
                    Удобный интерфейс для комфортного чтения
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-[#9B87F5]/10 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#333]">
              Познакомьтесь с Манго!
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 text-center">
                <div className="relative inline-block animate-bounce-slow">
                  <div className="w-52 h-52 rounded-full bg-[#FFD23F] flex items-center justify-center">
                    <div className="relative w-48 h-48 rounded-full bg-[#FFDE69] flex items-center justify-center">
                      {/* Стилизованное изображение персонажа манго */}
                      <div className="absolute">
                        <div className="w-40 h-36 rounded-full bg-[#FF9A3C]"></div>
                        <div className="absolute top-8 left-8 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-black"></div>
                        </div>
                        <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-black"></div>
                        </div>
                        <div className="absolute top-24 left-16 w-8 h-4 rounded-full bg-[#FF5D8F]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-4 bg-[#85C88A] rounded-t-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-3 text-[#FF9A3C]">Манго — наш веселый талисман</h3>
                  <p className="text-gray-600 mb-4">
                    Манго — веселый фруктовый персонаж, который обожает комиксы и мангу всех жанров. Он путешествует по страницам историй и помогает читателям найти самые интересные произведения.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Этот сочный плод всегда в курсе последних новинок и с радостью рекомендует истории, которые понравятся именно вам. Манго верит, что хорошая манга делает жизнь ярче и вкуснее!
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <Button className="bg-[#FF9A3C] hover:bg-[#E58835] text-white">
                      <Icon name="Heart" className="mr-2 h-4 w-4" />
                      Подружиться с Манго
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
