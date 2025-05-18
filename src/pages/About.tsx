
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-[#FFD23F]/10 to-transparent py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="animate-bounce-slow mb-6">
              <span className="text-7xl">🥭</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#333]">
              О проекте <span className="text-[#FF9A3C]">MangoComix</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Найди и читай любимые комиксы и мангу онлайн совершенно бесплатно!
            </p>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-[#333]">
                Наша миссия
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                MangoComix создан для того, чтобы сделать мир комиксов и манги доступным для каждого. Мы верим, что истории могут изменить жизнь, вдохновить и подарить радость.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Наша платформа предлагает разнообразную коллекцию произведений различных жанров: от романтических историй до захватывающих приключений, от школьных комедий до эпических фэнтези.
              </p>
              <div className="flex gap-4">
                <Link to="/categories">
                  <Button className="bg-[#9B87F5] hover:bg-[#836BE0] text-white">
                    <Icon name="BookOpen" className="mr-2 h-4 w-4" />
                    Начать чтение
                  </Button>
                </Link>
                <Button variant="outline">
                  <Icon name="Share2" className="mr-2 h-4 w-4" />
                  Поделиться
                </Button>
              </div>
            </div>
            
            <div className="order-first md:order-last flex justify-center">
              <div className="relative w-64 h-64 rounded-full bg-[#FFD23F]/20 flex items-center justify-center">
                <div className="absolute w-56 h-56 rounded-full bg-[#FF9A3C]/20 flex items-center justify-center">
                  <div className="absolute w-48 h-48 rounded-full bg-[#FF5D8F]/20 flex items-center justify-center">
                    <span className="text-9xl">🥭</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-[#333]">
                Познакомьтесь с Манго!
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Наш весёлый фруктовый талисман, который поможет вам насладиться чтением
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">🎨</div>
                <h4 className="text-xl font-bold mb-2 text-[#333]">Яркие истории</h4>
                <p className="text-gray-600">
                  Манго обожает все яркое и красочное! Он поможет вам выбрать самые красочные и визуально привлекательные комиксы.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h4 className="text-xl font-bold mb-2 text-[#333]">Простой поиск</h4>
                <p className="text-gray-600">
                  С Манго легко находить новые произведения! Он поможет вам искать по категориям и находить подходящие комиксы.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h4 className="text-xl font-bold mb-2 text-[#333]">Без ограничений</h4>
                <p className="text-gray-600">
                  Манго верит, что искусство должно быть доступно всем! Наша платформа не требует регистрации для чтения.
                </p>
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
