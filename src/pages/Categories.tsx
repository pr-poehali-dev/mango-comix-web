
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComicsGrid from "@/components/ComicsGrid";
import { getAllCategories, getComicsByCategory, comicsData } from "@/data/comicsData";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getAllCategories();
  const filteredComics = selectedCategory 
    ? getComicsByCategory(selectedCategory)
    : comicsData;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-[#9B87F5]/10 to-transparent py-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#333]">
              Категории комиксов и манги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Выберите категорию, чтобы найти комиксы и мангу, соответствующие вашим интересам
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              <Button 
                variant={selectedCategory === null ? "default" : "outline"}
                className={selectedCategory === null ? "bg-[#9B87F5] hover:bg-[#836BE0]" : ""}
                onClick={() => setSelectedCategory(null)}
              >
                <Icon name="LayoutGrid" className="mr-2 h-4 w-4" />
                Все категории
              </Button>
              
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "bg-[#9B87F5] hover:bg-[#836BE0]" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-8">
          <h3 className="text-2xl font-bold text-[#333] mb-6">
            {selectedCategory ? `Категория: ${selectedCategory}` : 'Все комиксы и манга'}
            <span className="text-gray-500 text-lg ml-2">({filteredComics.length})</span>
          </h3>
          
          {filteredComics.length > 0 ? (
            <ComicsGrid comics={filteredComics} />
          ) : (
            <div className="text-center py-16">
              <Icon name="FileSearch" className="mx-auto h-16 w-16 text-gray-300 mb-4" />
              <h4 className="text-xl font-medium mb-2">Комиксы не найдены</h4>
              <p className="text-gray-500">По выбранной категории нет доступных комиксов.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSelectedCategory(null)}
              >
                Сбросить фильтр
              </Button>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
