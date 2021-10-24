import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);
  return (
    <>
      <h3 className='animate__animated animate__fadeIn' >{category}</h3>
      {loading ? (
        <p className='animate__animated animate__flash'>loading...</p>
      ) : (
        <div className="card-grid">
          {images.map((img) => (
            <GifGridItem {...img} key={img.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default GifGrid;
