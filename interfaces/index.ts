export type CategoryType = {
  title: string;
  items: Array<CategoryItemType | SubCategoryType>;
};

export interface CategoryItemType {
  property: string;
  value: string;
}

export type SubCategoryType = {
  subtitle: string;
  items: CategoryItemType[];
};

export const isSubCategory = (
  obj: SubCategoryType | CategoryItemType
): obj is SubCategoryType => {
  return obj.hasOwnProperty("subtitle");
};
