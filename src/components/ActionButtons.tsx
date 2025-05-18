import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { comicsData } from "@/data/comicsData";

const ActionButtons = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleNewComics = () => {
    navigate("/new-comics");
  };

  const handleRandomComic = () => {
    const randomIndex = Math.floor(Math.random() * comicsData.length);
    const randomComic = comicsData[randomIndex];

    // В реальном приложении здесь был бы редирект на страницу комикса
    // navigate(`/comics/${randomComic.id}`);

    // Пока просто показываем уведомление
    toast({
      title: `Выбран комикс: ${randomComic.title}`,
      description: "Открываем случайный комикс для чтения...",
      duration: 3000,
    });
  };

  const handleTopComics = () => {
    navigate("/top-comics");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-3xl mx-auto">
      <Button
        size="lg"
        className="bg-[#9B87F5] hover:bg-[#836BE0] text-white flex-1 gap-2"
        onClick={handleNewComics}
      >
        <Icon name="Star" className="h-5 w-5" />
        Смотреть новые
      </Button>

      <Button
        size="lg"
        className="bg-[#FF9A3C] hover:bg-[#E58835] text-white flex-1 gap-2"
        onClick={handleRandomComic}
      >
        <Icon name="Shuffle" className="h-5 w-5" />
        Случайный комикс
      </Button>

      <Button
        size="lg"
        className="bg-[#FF5D8F] hover:bg-[#E54C7B] text-white flex-1 gap-2"
        onClick={handleTopComics}
      >
        <Icon name="TrendingUp" className="h-5 w-5" />
        Топ за неделю
      </Button>
    </div>
  );
};

export default ActionButtons;
