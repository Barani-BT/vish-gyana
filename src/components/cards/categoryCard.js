import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton CSS

const CategoryCard = ({ category, col }) => {
  const [catImage, setCatImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchImages = async (query) => {
    const apiKey = "3NBORNgL3Lru2h5yLUWCZeIs8XKoVervSB7j5opsFEssIvHYUtJIRtQZ";
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${query}`,
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    const data = await response.json();
    setCatImage(data?.photos?.[0]?.src?.medium);
    setLoading(false);
  };

  useEffect(() => {
    fetchImages(category.name);
  }, [category.name]);

  return (
    <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
      <Link to={`/${category.slug}`} className="text-decoration-none">
        <div className="card rounded">
          <div className="card-body d-flex flex-column p-0 border-0">
            {loading ? (
              <Skeleton height={150} />
            ) : (
              <img
                className=" mx-auto w-100"
                src={catImage}
                alt=""
                style={{ maxHeight: "150px" }}
              />
            )}
          </div>
          <div className="card-footer p-3 m-0 text-center bg-white border-0">
            <Link
              to={`/category/${category.slug}`}
              className="text-secondary fs-5 text-decoration-none"
            >
              {loading ? <Skeleton width={100} /> : category.name}
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
