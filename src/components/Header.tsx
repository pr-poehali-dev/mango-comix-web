import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#FF9A3C]">
              Mango<span className="text-[#9B87F5]">Comix</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#9B87F5] transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/categories"
              className="text-gray-700 hover:text-[#9B87F5] transition-colors"
            >
              Категории
            </Link>
            <Link
              to="/new-comics"
              className="text-gray-700 hover:text-[#9B87F5] transition-colors"
            >
              Новинки
            </Link>
            <Link
              to="/top-comics"
              className="text-gray-700 hover:text-[#9B87F5] transition-colors"
            >
              Топ
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-[#9B87F5] transition-colors"
            >
              О сайте
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Icon name="Search" className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Поиск комиксов</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSearch} className="flex gap-2 mt-4">
                  <Input
                    placeholder="Введите название или жанр..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    className="bg-[#9B87F5] hover:bg-[#836BE0]"
                  >
                    <Icon name="Search" className="h-4 w-4 mr-2" />
                    Найти
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link to="/" className="text-lg font-medium">
                    Главная
                  </Link>
                  <Link to="/categories" className="text-lg font-medium">
                    Категории
                  </Link>
                  <Link to="/new-comics" className="text-lg font-medium">
                    Новинки
                  </Link>
                  <Link to="/top-comics" className="text-lg font-medium">
                    Топ
                  </Link>
                  <Link to="/about" className="text-lg font-medium">
                    О сайте
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
