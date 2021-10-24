import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  console.log(categories);
  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {
        categories.map((cat) => (
         <GifGrid 
            key={cat} 
            category={cat}
            >    
            </GifGrid>
        ))
      }
    </div>
  );
};

export default GifExpertApp;
