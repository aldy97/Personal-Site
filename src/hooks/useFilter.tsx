import projectsList, { tag } from '../components/projectsList';
import blogList from '../components/blogList';

//Determine whether tags contain one that matches category being selected
const hasThisCateory = (tags: tag[], tagName: string) => {
  return tags.map((tag) => tag.name).includes(tagName);
};

type useFilterProps = {
  category: string;
};
function useFilter({ category }: useFilterProps) {
  const filteredList = blogList.filter((blog) =>
    hasThisCateory(blog.tags, category)
  );
  return filteredList;
}
export default useFilter;
