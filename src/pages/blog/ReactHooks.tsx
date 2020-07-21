import React from 'react';
import BlogLayout from '../../components/blogLayout';

const content = [
  <p>
    React Hooks are a way to "hook" into a functional component.Functional
    components used to be stateless component, which means they have never been
    able to hold a state, but with Hooks, it gives them the power to do so now.
  </p>,
  <p>
    State is written in a much cleaner way and setting or updating that state
    can be declared in as little as one line.Then you have lifecycle methods
    like componentDidMount that will be taken care of by useEffect. Hooks are
    powerful, and it allows for functional components to harness that power.
  </p>,
  <p>
    One prominent effectiveness of Hooks is that it maintains simplicity of
    functional component, while it dramatically expands conditions in which
    functional component can be used.
  </p>,
  <p>
    At React's official website, it has a page that says that they encourage
    people to write functional component as long as they possibly can in the
    future. However, it is not wise to rewrite class components that have
    already been done. At the same time, the React team would continuously
    contribute to development of class components. So do no get depressed if you
    feel uncomfortable with using functional components! Performance-wise,
    functional components are not obviously more efficient than class
    components.
  </p>,
];
const ReactHooks: React.FC = () => {
  return <BlogLayout index={1} content={content} height={340}></BlogLayout>;
};

export default ReactHooks;
