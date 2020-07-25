import { tag } from '../components/projectsList';
import blogList from '../components/blogList';

//Determine whether tags contain one that matches category being selected
const hasThisCateory = (tags: tag[], tagName: string) => {
  return tags.map((tag) => tag.name).includes(tagName);
};

export default function useBlogFilter(category: string) {
  if (category === 'All') {
    return blogList;
  } else {
    const filteredList = blogList.filter((blog) =>
      hasThisCateory(blog.tags, category)
    );
    return filteredList;
  }
}
