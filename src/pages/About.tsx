
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-[#FF5D8F]/10 to-transparent py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#333]">
              О проекте <span className="text-[#FF9A3C]">MangoComix</span>
            </h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-[#FFD23F] rounded-full transform -rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF9A3C] to-[#FF5D8F] rounded-full overflow-hidden flex items-center justify-center transform rotate-3">
                  <img 
                    src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=2940&auto=format&fit=crop" 
                    alt="Манго персонаж" 
                    className="w-[85%] h-[85%] object-cover rounded-full border-4 border-white"
                  />
                </div>
              </div>
              
              <div className="md:max-w-md text-left">
                <p className="text-lg text-gray-700 mb-4">
                  <span className="font-bold">MangoComix</span> — это онлайн-галерея с мангой и комиксами, 
                  созданная для всех любителей ярких историй и захватывающих приключений.
                </p>
                <p className="text-lg text-gray-700">
                  Наша миссия — сделать чтение комиксов и манги доступным для всех без необходимости регистрации.
                  Просто выбирайте истории по вкусу и наслаждайтесь!
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#333]">Познакомьтесь с Манго!</h3>
          
          <Card className="max-w-3xl mx-auto bg-gradient-to-br from-white to-[#FFD23F]/10 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="relative w-40 h-40 flex-shrink-0">
                  <div className="absolute inset-0 bg-[#FF9A3C]/20 rounded-full transform -rotate-3"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF9A3C] to-[#FF5D8F] rounded-full overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?q=80&w=3027&auto=format&fit=crop" 
                      alt="Манго" 
                      className="w-[90%] h-[90%] object-cover rounded-full border-2 border-white"
                    />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-2 text-[#FF9A3C]">Манго</h4>
                  <p className="text-gray-700 mb-3">
                    Привет! Я Манго, весёлый фруктовый персонаж и хранитель комиксов! 
                    Моя работа — помогать вам находить самые интересные истории в нашей библиотеке.
                  </p>
                  <p className="text-gray-700">
                    Я обожаю приключения, романтику и хорошие шутки! Каждый день я добавляю
                    новые комиксы и мангу, чтобы вам никогда не было скучно. Давайте вместе
                    отправимся в удивительные миры историй!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6 text-[#333]">У вас есть вопросы?</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Мы всегда готовы помочь и ответить на все ваши вопросы. 
              Не стесняйтесь обращаться к нам!
            </p>
            <a 
              href="mailto:info@mangocomix.com" 
              className="inline-block bg-[#9B87F5] hover:bg-[#836BE0] text-white py-3 px-8 rounded-lg font-medium transition-colors"
            >
              Связаться с нами
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
