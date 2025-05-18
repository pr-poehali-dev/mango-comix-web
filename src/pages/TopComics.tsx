
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComicsGrid from "@/components/ComicsGrid";
import { comicsData } from "@/data/comicsData";
import { ComicType } from "@/components/ComicCard";
import Icon from "@/components/ui/icon";

// Имитация популярных комиксов (в реальном приложении был бы запрос к API)
const getTopComics = (): ComicType[] => {
  // Выбираем случайные комиксы и добавляем к ним рейтинг
  const shuffled = [...comicsData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 6).map((comic, index) => ({
    ...comic,
    id: `top_${comic.id}`, // Обеспечиваем уникальный id
    // Дополнительное поле рейтинга для отображения
    rating: (5 - (index * 0.2)).toFixed(1)
  }));
};

interface TopComicType extends ComicType {
  rating?: string;
}

const TopComics = () => {
  const topComics = getTopComics() as TopComicType[];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-[#333]">Топ комиксов за неделю</h1>
        
        <div className="mb-6 bg-gradient-to-r from-[#FF5D8F]/10 to-white p-6 rounded-lg flex items-center">
          <Icon name="Trophy" className="h-8 w-8 text-[#FF5D8F] mr-4" />
          <div>
            <h2 className="text-xl font-semibold mb-1">Рейтинг читателей</h2>
            <p className="text-gray-700">
              Самые популярные комиксы и манга по оценкам наших пользователей за последнюю неделю
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8">
          {topComics.map((comic, index) => (
            <div key={comic.id} className="relative">
              {index < 3 && (
                <div className="absolute -top-3 -left-3 z-10 bg-[#FFD23F] text-white text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-md">
                  {index + 1}
                </div>
              )}
              <div className="absolute top-4 right-4 z-10 bg-white text-[#FF5D8F] text-sm font-bold px-2 py-1 flex items-center rounded-md shadow-md">
                <Icon name="Star" className="h-4 w-4 fill-[#FFD23F] mr-1" />
                {comic.rating}
              </div>
              <ComicsGrid comics={[comic]} />
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TopComics;
