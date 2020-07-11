import ScreenIcon from "../icons/ScreenIcon";
import Link from "next/link";

import styles from "./NavPanel.module.css";

type Props = {
  paths: string[];
};

const NavPanel = ({ paths }: Props) => {
  return (
    <nav className={styles.container}>
      <ScreenIcon fill="#fff" />
      <ul className={styles.pathsWrap}>
        {paths.map((path, i) => {
          if (i < paths.length - 1) {
            return (
              <li className={styles.pathItem} key={i}>
                <Link href="">
                  <a>{path}</a>
                </Link>
                <span>/</span>
              </li>
            );
          }
          return (
            <li className={styles.pathItem} key={i}>
              <Link href="">
                <a>{path}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavPanel;
