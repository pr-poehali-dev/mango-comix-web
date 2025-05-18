
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComicsGrid from "@/components/ComicsGrid";
import { comicsData } from "@/data/comicsData";
import { ComicType } from "@/components/ComicCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  
  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [searchResults, setSearchResults] = useState<ComicType[]>([]);
  
  const performSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase().trim();
    
    if (!lowerCaseQuery) {
      setSearchResults([]);
      return;
    }
    
    const results = comicsData.filter(comic => 
      comic.title.toLowerCase().includes(lowerCaseQuery) || 
      comic.description.toLowerCase().includes(lowerCaseQuery) ||
      comic.categories.some(category => 
        category.toLowerCase().includes(lowerCaseQuery)
      )
    );
    
    setSearchResults(results);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery });
    performSearch(searchQuery);
  };
  
  useEffect(() => {
    performSearch(queryParam);
  }, [queryParam]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-[#333]">Поиск комиксов</h1>
        
        <form onSubmit={handleSearch} className="mb-8 flex gap-2">
          <Input 
            placeholder="Введите название, описание или жанр..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" className="bg-[#9B87F5] hover:bg-[#836BE0]">
            <Icon name="Search" className="h-4 w-4 mr-2" />
            Найти
          </Button>
        </form>
        
        {queryParam && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">
              Результаты поиска для: "{queryParam}"
            </h2>
            
            {searchResults.length > 0 ? (
              <ComicsGrid comics={searchResults} />
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <Icon name="Search" className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-xl text-gray-500">По вашему запросу ничего не найдено</p>
                <p className="text-gray-400 mt-2">
                  Попробуйте изменить запрос или выбрать комиксы из категорий
                </p>
              </div>
            )}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
