import { SubCategoryType } from "../../interfaces";

import styles from "./SubCategory.module.css";
import CategoryItem from "../CategoryItem";
import { useState } from "react";
import Switcher from "../Switcher";

export default ({ subtitle, items }: SubCategoryType) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
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
  );
};
