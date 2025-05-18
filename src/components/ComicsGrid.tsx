
import ComicCard, { ComicType } from "./ComicCard";

interface ComicsGridProps {
  comics: ComicType[];
}

const ComicsGrid = ({ comics }: ComicsGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8">
      {comics.map((comic) => (
        <ComicCard key={comic.id} comic={comic} />
      ))}
    </div>
  );
};

export default ComicsGrid;
