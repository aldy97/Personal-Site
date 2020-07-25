import projectsList, { tag, project } from '../components/projectsList';
import { blog } from '../components/blogList';
import blogList from '../components/blogList';

//Determine whether tags contain one that matches category being selected
const hasThisCateory = (tags: tag[], tagName: string) => {
  return tags.map((tag) => tag.name).includes(tagName);
};

const useFilter: (type: string, category: string) => blog[] | project[] = (
  type: string,
  category: string
) => {
  if (category === 'All') {
    return type === 'projects' ? projectsList : blogList;
  } else {
    if (type === 'projects') {
      const filteredList = projectsList.filter((project) =>
        hasThisCateory(project.tags, category)
      );
      return filteredList;
    } else {
      const filteredList = blogList.filter((blog) =>
        hasThisCateory(blog.tags, category)
      );
      return filteredList;
    }
  }
};

export default useFilter;
