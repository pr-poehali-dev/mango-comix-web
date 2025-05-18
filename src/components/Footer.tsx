
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🥭</span>
              <span className="font-bold text-xl text-[#FF9A3C]">MangoComix</span>
            </div>
            <p className="text-gray-600">
              Удобная онлайн-галерея комиксов и манги без регистрации и ограничений.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#FF9A3C]">Главная</Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-[#FF9A3C]">Категории</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#FF9A3C]">О сайте</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Связаться с нами</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-[#FF9A3C]">
                <Icon name="Facebook" className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FF9A3C]">
                <Icon name="Twitter" className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FF9A3C]">
                <Icon name="Instagram" className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#FF9A3C]">
                <Icon name="Mail" className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MangoComix. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
