
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center my-8">
      <Button
        className="bg-[#FF5D8F] hover:bg-[#FF3A76] text-white shadow-md transition-transform hover:scale-105"
        size="lg"
      >
        <Icon name="BookNew" className="mr-2" />
        Смотреть новые
      </Button>
      
      <Button
        className="bg-[#9B87F5] hover:bg-[#836BE0] text-white shadow-md transition-transform hover:scale-105"
        size="lg"
      >
        <Icon name="Shuffle" className="mr-2" />
        Случайный комикс
      </Button>
      
      <Button
        className="bg-[#FFD23F] hover:bg-[#FFBF00] text-white shadow-md transition-transform hover:scale-105"
        size="lg"
      >
        <Icon name="Trophy" className="mr-2" />
        Топ за неделю
      </Button>
    </div>
  );
};

export default ActionButtons;
