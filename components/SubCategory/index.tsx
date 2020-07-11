import { useState, useRef, useEffect } from "react";

import { SubCategoryType } from "../../interfaces";

import styles from "./SubCategory.module.css";
import CategoryItem from "../CategoryItem";
import Switcher from "../Switcher";

export default ({ subtitle, items }: SubCategoryType) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [heightDiff, setHeightDiff] = useState<number>(0);
  const itemsCollection = useRef<HTMLInputElement | any>(null);

  useEffect(() => {
    setHeightDiff(itemsCollection.current?.lastChild?.clientHeight + 8);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titleWrap}>
        <p className={styles.subtitle}>{subtitle}</p>
        <span className={styles.icon}>
          <Switcher
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            fill="#6C6C6C"
          />
        </span>
      </div>
      <div ref={itemsCollection}>
        {isOpen &&
          items.map(({ property, value }, i) => (
            <CategoryItem
              isSub={true}
              property={property}
              value={value}
              key={i}
            />
          ))}
      </div>
      <div
        style={{
          height: `calc(100% - ${heightDiff}px)`,
        }}
        className={styles.divider}
      />
    </div>
  );
};
