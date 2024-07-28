import { useEffect } from "react";
import MetaTag from "../layouts/metaTag";
import { getCAtegory } from "../redux/actions/categoryAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layouts/loader";
import { toast } from "react-toastify";
import CategoryCard from "../cards/categoryCard";
const Home = () => {
  const dispatch = useDispatch();

  const { category, loading, error } = useSelector(
    (state) => state.CategoryState
  );

  useEffect(() => {
    if (error) {
      return toast.error(error);
    }
    dispatch(getCAtegory);
  }, [error, dispatch]);

  return (
    <>
      {!loading ? (
        <>
          <MetaTag title={"category"} />

          <section id="category" className="container mt-5">
            <div className="row">
              {category?.length &&
                category.map((category) => (
                  <CategoryCard
                    col={3}
                    category={category}
                    key={category.slug}
                  />
                ))}
            </div>
          </section>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
