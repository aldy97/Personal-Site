import projectsList, { tag, project } from '../components/projectsList';
import { blog } from '../components/blogList';
import blogList from '../components/blogList';

//Determine whether tags contain one that matches category being selected
const hasThisCateory = (tags: tag[], tagName: string): boolean => {
  return tags.map((tag) => tag.name).includes(tagName);
};

const getReversedList = (str: string): blog[] | project[] => {
  let reversedProjectList: project[] = [];
  let reversedBlogList: blog[] = [];
  if (str === 'blog') {
    for (let i = blogList.length - 1; i >= 0; i--) {
      reversedBlogList.push(blogList[i]);
    }
    return reversedBlogList;
  } else {
    for (let i = projectsList.length - 1; i >= 0; i--) {
      reversedProjectList.push(projectsList[i]);
    }
    return reversedProjectList;
  }
};

const useFilter: (type: string, category: string) => blog[] | project[] = (
  type: string,
  category: string
) => {
  if (category === 'All') {
    return type === 'projects'
      ? getReversedList('projects')
      : getReversedList('blog');
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
