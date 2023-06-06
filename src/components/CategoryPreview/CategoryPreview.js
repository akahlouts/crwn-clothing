import ProductCrad from "../ProductCard/ProductCard";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./CategoryPreview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Title to={title}>{title.toUpperCase()}</Title>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCrad key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
