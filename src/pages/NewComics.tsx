
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComicsGrid from "@/components/ComicsGrid";
import { comicsData } from "@/data/comicsData";
import { ComicType } from "@/components/ComicCard";

// Имитация новых комиксов (в реальном приложении был бы запрос к API)
const getNewComics = (): ComicType[] => {
  // Эмулируем, что новые комиксы - это первые 4 комикса из общего списка
  return comicsData.slice(0, 4).map(comic => ({
    ...comic,
    id: `new_${comic.id}` // Обеспечиваем уникальный id
  }));
};

const NewComics = () => {
  const newComics = getNewComics();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-[#333]">Новые комиксы и манга</h1>
        
        <div className="mb-6 bg-gradient-to-r from-[#9B87F5]/10 to-white p-6 rounded-lg">
          <p className="text-lg text-gray-700">
            Последние поступления в нашу библиотеку. Свежие главы и новые истории обновляются каждый день!
          </p>
        </div>
        
        <ComicsGrid comics={newComics} />
      </main>
      
      <Footer />
    </div>
  );
};

export default NewComics;
