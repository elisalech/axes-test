import { CategoryItemType } from "../../interfaces";
import cn from "classnames";

import styles from "./CategoryItem.module.css";

interface Props extends CategoryItemType {
  isSub?: boolean;
}

const CategotyItem = ({ property, value, isSub }: Props) => {
  return (
    <div className={styles.container}>
      <span
        className={cn(styles.property, {
          [`${styles.sub_property}`]: isSub,
        })}
      >
        {property}
      </span>
      <span
        className={cn(styles.value, {
          [`${styles.bold}`]: !!parseInt(value),
          [`${styles.sub_value}`]: isSub,
        })}
      >
        {value}
      </span>
    </div>
  );
};
export default CategotyItem;
