
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#FF9A3C] to-[#FFD23F] p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <Link to="/" className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="bg-white rounded-full p-2 shadow-md">
            <Icon name="Cherry" className="text-[#FF5D8F] w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-white">MangoComix</h1>
        </Link>
        
        <nav>
          <ul className="flex flex-wrap gap-4 justify-center">
            <li>
              <Link 
                to="/" 
                className="text-white hover:text-purple-100 font-medium transition-colors"
              >
                Главная
              </Link>
            </li>
            <li>
              <Link 
                to="/categories" 
                className="text-white hover:text-purple-100 font-medium transition-colors"
              >
                Категории
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-white hover:text-purple-100 font-medium transition-colors"
              >
                О сайте
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
