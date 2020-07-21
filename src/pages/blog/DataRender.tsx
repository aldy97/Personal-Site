import React from 'react';
import SubTitle from '../../components/SubTitle';
import BlogLayout from '../../components/blogLayout';
import ImgHolder from '../../components/ImgHolder';

const content = [
  <p>
    Rendering content in suitable ways helps user to locate and track
    information more efficiently, thuse improving using experience. There are
    couple of ways to present content, UI/UX designers need to choose them
    wisely and accordingly.
  </p>,
  <SubTitle>
    <strong>Table</strong>
  </SubTitle>,
  <ImgHolder mobileHeight={250}>
    <img alt='' src={require('../../static/DataRender/Table.png')} />
  </ImgHolder>,
  <p>
    Table is considered as the clearest and most efficient way of rendering
    data. It is suitable in cases like{' '}
    <strong>information collection, integration and analyze</strong>.
  </p>,
  <SubTitle>
    <strong>Collapse</strong>
  </SubTitle>,
  <ImgHolder mobileHeight={250}>
    <img alt='' src={require('../../static/DataRender/Collapse.png')} />
  </ImgHolder>,
  <p>
    Collapse allows user to temporally show and hidden wanted and unwanted
    information by simply clicking bars. It is a good fit when we have a lot
    content to show while <strong>maintaining tidiness</strong> of the interface
    is still being considered.
  </p>,
  <SubTitle>
    <strong>Carousel</strong>
  </SubTitle>,
  <ImgHolder mobileHeight={250}>
    <img alt='' src={require('../../static/DataRender/Carousel.png')} />
  </ImgHolder>,
  <p>
    A flat parallel content presentation, ususally used in{' '}
    <strong>website homepage</strong>. Keep in mind it is proper to have around
    3-5 slides in a carousel, and we need to give hints to users on number of
    slides and the direction it is sliding towards.
  </p>,
  <SubTitle>
    <strong>Card</strong>
  </SubTitle>,
  <ImgHolder mobileHeight={250}>
    <img alt='' src={require('../../static/DataRender/Card.png')} />
  </ImgHolder>,
  <p>
    Card is a content container that does not have too much restrictions on type
    of content being held. It gives users a 'blocky' feeling, which means that
    it makes <strong>content of the same type more concentrated</strong>, thus
    easier operations.
  </p>,
];

const DataRender: React.FC = () => {
  return <BlogLayout index={2} content={content} height={450}></BlogLayout>;
};

export default DataRender;
