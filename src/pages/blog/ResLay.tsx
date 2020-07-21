import React from 'react';
import BlogLayout from '../../components/blogLayout';
import SubTitle from '../../components/SubTitle';
import ImgHolder from '../../components/ImgHolder';

const content = [
  <SubTitle>1. Static Layout</SubTitle>,
  <ImgHolder>
    <img alt='' src={require('../../static/LayOutPic/static.png')} />
  </ImgHolder>,
  <p>
    A static page layout (sometimes called a “fixed” layout or “fixed width”
    layout) uses a preset page size and does not change based on the browser
    width. In other words, the page layout might have a permanent width of 960
    pixels no matter what. This is how web pages were traditionally built for
    many years until modern influences like media queries and responsive design
    were introduced around the start of the 2010s.
  </p>,
  <p>
    Different devices will treat a static page layout in various ways, so the
    rendered page could be slightly unpredictable. For example, on a desktop
    browser, if the window is too small horizontally, then the page will be cut
    off and horizontal scroll bars will be displayed. On a mobile device like an
    iPhone, the page will be scaled automatically, allowing the user to zoom in
    on points of interest (provided that no metatags override this default
    behavior).
  </p>,
  <p>
    When new websites are built, most of them don’t opt for a static layout,
    because it means that the mobile experience will require a separate website.
    There are major exceptions, such as the online Apple.com store, but Apple is
    a unique case because a selling point of their mobile devices is that they
    can view static layouts. In other words, Apple doesn’t seem to be adopting
    responsive design just yet.
  </p>,
  <SubTitle>2. Liquid Page Layout</SubTitle>,
  <ImgHolder>
    <img alt='' src={require('../../static/LayOutPic/liquid.png')} />
  </ImgHolder>,
  <p>
    A liquid page layout (sometimes called “fluid” or “fluid width”) uses
    relative units instead of fixed units. Typically a liquid layout will use
    percentages instead of pixels, but any relative unit of measurement will
    work, such as ems.
  </p>,
  <p>
    A liquid layout often will fill the width of the page, no matter what the
    width of the browser might be. Liquid layouts don’t require as much thought
    as a responsive design, but there are some major drawbacks at very large or
    very small browser widths. If the browser is very wide, some content might
    be stretched too far. On large screens, a single paragraph might run across
    the page on a single line. Conversely, a multi-column layout on a small
    screen could be too crowded for the content.
  </p>,
  <SubTitle>3. Adaptive Page Layout</SubTitle>,
  <ImgHolder>
    <img alt='' src={require('../../static/LayOutPic/adaptive.png')} />
  </ImgHolder>,
  <p>
    An adaptive page layout uses CSS media queries to detect the width of the
    browser and alter the layout accordingly. Adaptive layouts will use fixed
    unit like pixels, just like a static layout, but the difference is that
    there are essentially multiple fixed widths defined by specific media
    queries.
  </p>,
  <p>
    A media query is an expression of logic, and when used in combination with
    other media queries, they form a basic algorithm. So for example, an
    adaptive page layout might say something like, “If the browser 500 pixels
    wide, set the main content container to be 400 pixels wide. If the browser
    is 1000 pixels wide, then set the main content container to be 960 pixels
    wide.” Beyond the main content container, other parts of the page might
    change in width, swap places, or be removed. For example, a two column
    layout might become a single column layout if the browser is too narrow.
  </p>,
  <p>
    Adaptive layouts are a good stop-gap solution if a legacy static layout
    needs to be converted to support mobile devices. They also typically require
    less development time than a responsive layout. The major drawback is that
    device widths in-between the explicit breakpoints are often less than ideal,
    with either too much space or not enough space.
  </p>,
  <SubTitle>4. Responsive Page Layout</SubTitle>,
  <ImgHolder>
    <img alt='' src={require('../../static/LayOutPic/responsive.png')} />
  </ImgHolder>,
  <p>
    A responsive page layout uses both relative units and media queries,
    ostensibly combining the ideas of a liquid layout and an adaptive layout. As
    the browser increases or decreases in width, a responsive layout will flex
    just like a liquid layout. However, if the browser goes beyond certain
    widths defined by media query breakpoints, then the layout will change more
    dramatically to accommodate a wide or narrow width.
  </p>,
  <p>
    Typically responsive designs are built using a mobile-first approach. That
    means the mobile layout is designed first, and then as the browser becomes
    wider on tablets and desktops, the designer will find ways to expand the
    mobile layout. This tends to create better experiences overall, because it’s
    easier to expand a design than to try and simplify a large layout for mobile
    screens.
  </p>,
];

const ResLay = () => {
  return <BlogLayout index={3} content={content} height={464}></BlogLayout>;
};

export default ResLay;
