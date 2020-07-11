import { useState, useRef, useEffect } from "react";

import styles from "./Category.module.css";

import { CategoryType, isSubCategory } from "../../interfaces";
import CategotyItem from "../CategoryItem";
import Switcher from "../Switcher";
import SubCategory from "../SubCategory";

interface Props extends CategoryType {
  isLastCategory: boolean;
}

const Category = ({ title, items, isLastCategory }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [heightDiff, setHeightDiff] = useState<number>(0);
  const itemsCollection = useRef<HTMLInputElement | any>(null);

  useEffect(() => {
    setHeightDiff(itemsCollection.current?.lastChild?.clientHeight + 5);
  }, []);

  const height: string = isLastCategory
    ? `calc(100% + 50px)`
    : `calc(100% - ${heightDiff}px)`;

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
      {isOpen && (
        <div ref={itemsCollection}>
          <div
            style={{
              height,
            }}
            className={styles.divider}
          ></div>
          {items.map((item, i) =>
            isSubCategory(item) ? (
              <SubCategory
                subtitle={item.subtitle}
                items={item.items}
                key={i}
              />
            ) : (
              <CategotyItem
                key={i}
                property={item.property}
                value={item.value}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};
export default Category;
