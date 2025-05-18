
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

export interface ComicType {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
}

interface ComicCardProps {
  comic: ComicType;
}

const ComicCard = ({ comic }: ComicCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full max-w-sm">
      <div className="h-64 overflow-hidden">
        <img 
          src={comic.image} 
          alt={comic.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{comic.title}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Share2" className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Icon name="Facebook" className="mr-2 h-4 w-4" />
                Facebook
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icon name="Twitter" className="mr-2 h-4 w-4" />
                Twitter
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icon name="Send" className="mr-2 h-4 w-4" />
                Telegram
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-1">
          {comic.categories.map((category) => (
            <Badge key={category} variant="secondary" className="text-xs bg-gray-100">
              {category}
            </Badge>
          ))}
        </div>
      </CardHeader>
      
      <CardContent>
        <CardDescription className="line-clamp-3 text-sm">
          {comic.description}
        </CardDescription>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-[#9B87F5] hover:bg-[#836BE0] text-white">
          <Icon name="BookOpen" className="mr-2 h-4 w-4" />
          Читать
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ComicCard;
