import { useState } from "react";
import { Grid, Tab, TabsWrapper, Wrapper } from "./styes";
import { ProductCard } from "../../../../components/home/product-card";
import { products } from "../../../../data/products";
import { categories } from "../../../../data/categories";

export default function CardGrid() {
  const [activeTab, setActiveTab] = useState(categories[0].name);

  const filtered = products.filter((product) => {
    const category = categories.find((category) => category.name === activeTab);
    return product.categoryId === category?.id;
  });

  return (
    <Wrapper>
      <TabsWrapper>
        {categories.map((tab) => (
          <Tab
            key={tab.id}
            active={activeTab === tab.name}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </Tab>
        ))}
      </TabsWrapper>

      <Grid>
        {filtered.map((product, id) => (
          <ProductCard key={id} {...product} />
        ))}
      </Grid>
    </Wrapper>
  );
}
