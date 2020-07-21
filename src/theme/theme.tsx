type themeProps = {
  [key: string]: string;
};

const theme: themeProps = {
  $headerHeight: '60px',
  $headerWidth: '1200px',
  $headerFontSize: '18px',
  $publishTimeFontSize: '16px',
  $iconSize: '36px',
  $introFontSize: '36px',
  $titleSize: '48px',
  $marginSection: '40px',
  $marginPic: '20px',
  $blogWidth: '800px',

  //colors
  $footerBorderColor: 'rgb(3, 37, 108)',
  $tsBlue: 'rgb(0, 122, 204)',
  $jsYellow: '#f6b906',
  $reactBlue: '#1e8feb',
  $nodeGreen: '#68A063',
  $expressGreen: '#3C873A',
  $themeColor: 'rgb(0, 122, 204)',
  $publishTimeColor: '#8c8c8c',
  $dividerColor: `rgba(46, 116, 201, 0.2)`,

  //on Mobile end
  $mobileWidth: '350px',
};

export default theme;
