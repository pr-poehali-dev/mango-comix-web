
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComicsGrid from "@/components/ComicsGrid";
import ActionButtons from "@/components/ActionButtons";
import { comicsData } from "@/data/comicsData";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-[#FFD23F]/10 to-transparent py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#333]">
              Добро пожаловать в <span className="text-[#FF9A3C]">MangoComix</span>!
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Открой для себя мир ярких историй и захватывающих приключений без регистрации
            </p>
            
            <ActionButtons />
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-[#333]">Популярные комиксы и манга</h3>
            <Button variant="outline" className="gap-1">
              <Icon name="ListFilter" className="h-4 w-4" />
              Все комиксы
            </Button>
          </div>
          
          <ComicsGrid comics={comicsData} />
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-[#9B87F5] hover:bg-[#836BE0] text-white">
              Показать больше
              <Icon name="ArrowDown" className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
