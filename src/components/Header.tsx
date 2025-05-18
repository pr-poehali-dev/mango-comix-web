
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-3xl">🥭</span>
            <span className="font-bold text-xl text-[#FF9A3C]">MangoComix</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="font-medium hover:text-[#FF9A3C] transition-colors">
              Главная
            </Link>
            <Link to="/categories" className="font-medium hover:text-[#FF9A3C] transition-colors">
              Категории
            </Link>
            <Link to="/about" className="font-medium hover:text-[#FF9A3C] transition-colors">
              О сайте
            </Link>
            <Button variant="outline" className="gap-2">
              <Icon name="Search" className="h-4 w-4" />
              Поиск
            </Button>
          </nav>
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Icon name="Search" className="h-5 w-5" />
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col mt-8 gap-6">
                  <Link to="/" className="font-medium text-lg">
                    Главная
                  </Link>
                  <Link to="/categories" className="font-medium text-lg">
                    Категории
                  </Link>
                  <Link to="/about" className="font-medium text-lg">
                    О сайте
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
