
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-[#333] text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="bg-white rounded-full p-2">
                <Icon name="Cherry" className="text-[#FF5D8F] w-6 h-6" />
              </div>
              <span className="text-xl font-bold">MangoComix</span>
            </div>
            <p className="text-gray-400 mt-2 text-center md:text-left text-sm">
              © {new Date().getFullYear()} MangoComix. Все права защищены.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:text-[#FF9A3C] transition-colors">
                <Icon name="Facebook" className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-[#FF9A3C] transition-colors">
                <Icon name="Twitter" className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-[#FF9A3C] transition-colors">
                <Icon name="Instagram" className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-[#FF9A3C] transition-colors">
                <Icon name="Youtube" className="w-5 h-5" />
                <span className="sr-only">Youtube</span>
              </a>
            </div>
            
            <nav>
              <ul className="flex gap-4 flex-wrap justify-center">
                <li>
                  <Link to="/" className="text-sm hover:text-[#FF9A3C] transition-colors">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link to="/categories" className="text-sm hover:text-[#FF9A3C] transition-colors">
                    Категории
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm hover:text-[#FF9A3C] transition-colors">
                    О сайте
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
