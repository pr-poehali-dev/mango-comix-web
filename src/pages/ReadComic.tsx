
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { comicsData } from "@/data/comicsData";
import { ComicType } from "@/components/ComicCard";
import { Separator } from "@/components/ui/separator";

// Фиктивные страницы комикса для демонстрации
const mockPages = [
  "https://images.unsplash.com/photo-1588497859490-85d1c17db96d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1604326991793-0254d13f0fc6?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1623018035782-b269248df916?q=80&w=2070&auto=format&fit=crop"
];

const ReadComic = () => {
  const { comicId } = useParams<{ comicId: string }>();
  const [comic, setComic] = useState<ComicType | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных комикса
    setIsLoading(true);
    
    setTimeout(() => {
      const foundComic = comicsData.find(c => c.id === comicId);
      setComic(foundComic || null);
      setIsLoading(false);
    }, 800);
  }, [comicId]);

  const handleNextPage = () => {
    if (currentPage < mockPages.length - 1) {
      setCurrentPage(prev => prev + 1);
      // Прокручиваем вверх при переходе на новую страницу
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 flex justify-center items-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#9B87F5]"></div>
            <p className="mt-4 text-gray-600">Загрузка комикса...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!comic) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 flex justify-center items-center">
          <Card className="w-full max-w-md">
            <CardContent className="p-6 text-center">
              <Icon name="FileQuestion" className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Комикс не найден</h2>
              <p className="text-gray-600 mb-6">К сожалению, запрошенный комикс не существует или был удален.</p>
              <Link to="/">
                <Button className="bg-[#9B87F5] hover:bg-[#836BE0] text-white">
                  Вернуться на главную
                </Button>
              </Link>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-wrap justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#333]">{comic.title}</h1>
            <div className="flex flex-wrap gap-1 mt-2">
              {comic.categories.map((category) => (
                <Badge key={category} variant="secondary" className="text-xs bg-gray-100">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="gap-1">
              <Icon name="Heart" className="h-4 w-4" />
              В избранное
            </Button>
            <Button variant="outline" className="gap-1">
              <Icon name="Share2" className="h-4 w-4" />
              Поделиться
            </Button>
          </div>
        </div>
        
        <Card className="overflow-hidden shadow-md mb-6">
          <CardContent className="p-0">
            <div className="bg-gray-900 flex justify-center items-center">
              <img 
                src={mockPages[currentPage]} 
                alt={`Страница ${currentPage + 1}`} 
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-between items-center mb-8">
          <Button 
            variant="outline" 
            onClick={handlePrevPage} 
            disabled={currentPage === 0}
            className="gap-1"
          >
            <Icon name="ChevronLeft" className="h-4 w-4" />
            Предыдущая
          </Button>
          
          <span className="text-sm font-medium text-gray-600">
            Страница {currentPage + 1} из {mockPages.length}
          </span>
          
          <Button 
            variant="outline" 
            onClick={handleNextPage} 
            disabled={currentPage === mockPages.length - 1}
            className="gap-1"
          >
            Следующая
            <Icon name="ChevronRight" className="h-4 w-4" />
          </Button>
        </div>
        
        <Separator className="my-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Об этом комиксе</h2>
            <p className="text-gray-700 mb-6">{comic.description}</p>
            
            <h3 className="text-lg font-semibold mb-3">Комментарии</h3>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="text-gray-600">Войдите или зарегистрируйтесь, чтобы оставлять комментарии</p>
              <div className="mt-4 flex justify-center gap-2">
                <Button variant="outline" className="gap-1">
                  <Icon name="LogIn" className="h-4 w-4" />
                  Войти
                </Button>
                <Button className="bg-[#9B87F5] hover:bg-[#836BE0] text-white gap-1">
                  <Icon name="UserPlus" className="h-4 w-4" />
                  Регистрация
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Вам также может понравиться</h3>
                <div className="space-y-4">
                  {comicsData
                    .filter(c => c.id !== comic.id && c.categories.some(cat => comic.categories.includes(cat)))
                    .slice(0, 3)
                    .map(relatedComic => (
                      <Link key={relatedComic.id} to={`/read/${relatedComic.id}`} className="block group">
                        <div className="flex items-center gap-3">
                          <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                            <img 
                              src={relatedComic.image} 
                              alt={relatedComic.title} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium group-hover:text-[#9B87F5] transition-colors">
                              {relatedComic.title}
                            </h4>
                            <p className="text-xs text-gray-500 line-clamp-1 mt-1">
                              {relatedComic.categories.join(', ')}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ReadComic;
