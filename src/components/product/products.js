import { useEffect } from "react";
import MetaTag from "../layouts/metaTag";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layouts/loader";
import { getProducts } from "../redux/actions/productAction";
import { useParams } from "react-router-dom";
import ProductCard from "../cards/productCard";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.ProductsState);
  const { category_slug } = useParams();

  useEffect(() => {
    dispatch(getProducts(category_slug));
  }, [dispatch, category_slug]);
  return (
    <>
      {!loading ? (
        <>
          <MetaTag title={category_slug} />
          <section id="category" className="container mt-5">
            <div className="row">
              {products?.length &&
                products.map((product) => (
                  <ProductCard col={3} product={product} key={product.slug} />
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

export default Products;
