import { useState, useEffect } from "react";

type Props = {
  initialFavorites?: string[];
};

const Favorites = ({ initialFavorites = [] }: Props) => {
  // Define the state for the list of liked jobs
  const [favorites, setFavorites] = useState<string[]>(initialFavorites);

  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  // Define a function to check if a job is liked
  function isFavorite(id: string) {
    return favorites.includes(id);
  }

  // Define a function to toggle the like status of a job
  function toggleFavorite(id: string) {
    if (isFavorite(id)) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav !== id)
      );
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, id]);
    }
  }

  return { favorites, toggleFavorite, isFavorite };
};

export default Favorites;
