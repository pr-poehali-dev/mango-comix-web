
import { useState } from "react";
import { Button } from "@/components/ui/button";
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
        <section className="bg-gradient-to-b from-[#9B87F5]/10 to-transparent py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#333]">
              Категории
            </h2>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => setSelectedCategory(null)}
                className={selectedCategory === null ? "bg-[#9B87F5] text-white" : ""}
              >
                Все
              </Button>
              
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-[#9B87F5] text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-[#333]">
              {selectedCategory ? `Категория: ${selectedCategory}` : "Все комиксы и манга"}
            </h3>
            <p className="text-gray-600">
              {filteredComics.length} {filteredComics.length === 1 ? "комикс" : 
               filteredComics.length > 1 && filteredComics.length < 5 ? "комикса" : "комиксов"}
            </p>
          </div>
          
          {filteredComics.length > 0 ? (
            <ComicsGrid comics={filteredComics} />
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">
                Комиксы в данной категории не найдены.
              </p>
              <Button 
                onClick={() => setSelectedCategory(null)}
                className="mt-4 bg-[#9B87F5] hover:bg-[#836BE0] text-white"
              >
                Показать все комиксы
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
