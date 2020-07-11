import { GetServerSideProps } from "next";
import Head from "next/head";

import NavPanel from "../components/NavPanel";
import { CategoryType } from "../interfaces";
import Category from "../components/Category";
import { getCategories, getPaths } from "../mocks";

type Props = {
  categories: CategoryType[];
  paths: string[];
};

const IndexPage = ({ categories, paths }: Props) => {
  return (
    <>
      <Head>
        <title>Axes test</title>
      </Head>
      <NavPanel paths={paths} />
      <main>
        <div className="labels_wrap">
          <div className="label_property">Свойства</div>
          <div>Значения</div>
        </div>
        {categories?.map((category, i) => (
          <Category
            isLastCategory={i === categories.length - 1}
            title={category.title}
            items={category.items}
            key={i}
          />
        ))}
      </main>
    </>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const [categories, paths] = await Promise.all([getCategories(), getPaths()]);
  return { props: { categories, paths } };
};
