import { useParams } from "react-router-dom";
import { useEffect } from "react";
// import useDispatch from "@/hooks/useDispatch";
import { actions as productActions } from "@/reducers/product";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
    const params = useParams();
    const slug = params.slug;
    const dispatch = useDispatch();
    const product = useSelector((state) => {
        return state.product.detail[slug];
    });

    useEffect(() => {
        dispatch(productActions.getDetailProduct(params.slug));
    }, [params.slug, dispatch]);

    console.log(product);
    return (
        <div>
            {product ? (
                <>
                    <h1>Product Detail</h1>
                    <h2>{product.title}</h2>
                    <img src={product.thumbnail} alt={product.title} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};
export default ProductDetail;
