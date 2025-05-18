
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FF9A3C]">
              Mango<span className="text-[#9B87F5]">Comix</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Лучшая онлайн-библиотека манги и комиксов. Читайте любимые истории бесплатно и без регистрации!
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-700">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#9B87F5] transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-600 hover:text-[#9B87F5] transition-colors">
                  Категории
                </Link>
              </li>
              <li>
                <Link to="/new-comics" className="text-gray-600 hover:text-[#9B87F5] transition-colors">
                  Новинки
                </Link>
              </li>
              <li>
                <Link to="/top-comics" className="text-gray-600 hover:text-[#9B87F5] transition-colors">
                  Топ недели
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#9B87F5] transition-colors">
                  О сайте
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-700">Категории</h4>
            <div className="flex flex-wrap gap-2">
              <Link to="/categories" className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-[#9B87F5]/20 transition-colors">
                Романтика
              </Link>
              <Link to="/categories" className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-[#9B87F5]/20 transition-colors">
                Экшен
              </Link>
              <Link to="/categories" className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-[#9B87F5]/20 transition-colors">
                Комедия
              </Link>
              <Link to="/categories" className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-[#9B87F5]/20 transition-colors">
                Школа
              </Link>
              <Link to="/categories" className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-[#9B87F5]/20 transition-colors">
                Приключения
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2025 MangoComix. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
