// import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
//   const [images, setImages] = useState([]);
    const {data, loading} = useFetchGifs()
//   useEffect(() => {
    
//     getGifs(category)
//         .then( setImages );
//   }, [category]);

  return (
    <>
      <h3>{category}</h3>
      {/* <div className="card-grid">
        {
            images.length > 0 ?
                images.map((img) => {
                    return <GifGridItem key={img.id} {...img}></GifGridItem>;
                })
            :
            <p>No results</p>
        }
      </div> */}
    </>
  );
};

export default GifGrid;
