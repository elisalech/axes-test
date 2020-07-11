import { useState } from "react";

import styles from "./Category.module.css";

import { CategoryType, isSubCategory } from "../../interfaces";
import CategotyItem from "../CategoryItem";
import Switcher from "../Switcher";
import SubCategory from "../SubCategory";

const Category = ({ title, items }: CategoryType) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div className={styles.container}>
      <div className={styles.titleWrap}>
        <h3 className={styles.title}>{title}</h3>
        <Switcher
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className={styles.icon}
          fill="#6C6C6C"
        />
      </div>
      {isOpen &&
        items.map((item, i) =>
          isSubCategory(item) ? (
            <SubCategory subtitle={item.subtitle} items={item.items} key={i} />
          ) : (
            <CategotyItem key={i} property={item.property} value={item.value} />
          )
        )}
    </div>
  );
};
export default Category;
