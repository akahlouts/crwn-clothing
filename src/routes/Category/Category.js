import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCrad from "../../components/ProductCard/ProductCard";
import Spinner from "../../components/Spinner/Spinner";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

import {
  CategoryTitle,
  CategoryContainer,
  CategoryBox,
} from "./Category.styles";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
    window.scrollTo(0, 0);
  }, [category, categoriesMap]);

  return (
    <CategoryContainer>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryBox>
          {products &&
            products.map((product) => (
              <ProductCrad key={product.id} product={product} />
            ))}
        </CategoryBox>
      )}
    </CategoryContainer>
  );
};

export default Category;
