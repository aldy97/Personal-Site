type themeProps = {
  [key: string]: string | number;
};

const lightTheme: themeProps = {
  $headerHeight: '50px',
  $headerWidth: '1200px',
  $headerFontSize: '18px',
  $publishTimeFontSize: '16px',
  $iconSize: '36px',
  $introFontSize: '36px',
  $titleSize: '48px',
  $marginSection: '40px',
  $marginPic: '20px',

  //width on pc-end and mobile-end
  $blogWidth: 800,
  $mobileWidth: 350,
  $padWidth: 600,
  $projectWidth: 600,

  //colors
  $background: '#fff',
  $headerName: 'rgb(0, 122, 204)',
  $filterBorder: 'rgb(0, 122, 204)',
  $name: '',
  $icon: '#f6b906',
  $cardBorder: '#eee',
  $cardText: '',
  $category: 'rgba(0,0,0,.65)',
  $footerBorderColor: 'rgb(3, 37, 108)',
  $tsBlue: 'rgb(0, 122, 204)',
  $jsYellow: '#f6b906',
  $reactBlue: '#1e8feb',
  $nodeGreen: '#68A063',
  $expressGreen: '#3C873A',
  $themeColor: 'rgb(0, 122, 204)',
  $publishTimeColor: '#8c8c8c',
  $dividerColor: `rgba(46, 116, 201, 0.2)`,
};

export const darkTheme: themeProps = {
  $headerHeight: '50px',
  $headerWidth: '1200px',
  $headerFontSize: '18px',
  $publishTimeFontSize: '16px',
  $iconSize: '36px',
  $introFontSize: '36px',
  $titleSize: '48px',
  $marginSection: '40px',
  $marginPic: '20px',

  //width on pc-end and mobile-end
  $blogWidth: 800,
  $mobileWidth: 350,
  $padWidth: 600,
  $projectWidth: 600,

  //dark mode colors
  $background: '#09215a',
  $headerName: '#6282c4',
  $name: '#fff',
  $filterBorder: '#6282c4',
  $cardTheme: '#1b3191',
  $cardText: '#6282c4',
  $category: 'rgb(0,122,204)',
  $cardBorder: '#1b3191',
  $icon: '#7ac4d5',
  $footerBorderColor: 'rgb(3, 37, 108)',
  $tsBlue: 'rgb(0, 122, 204)',
  $jsYellow: '#f6b906',
  $reactBlue: '#1e8feb',
  $nodeGreen: '#68A063',
  $expressGreen: '#3C873A',
  $themeColor: '#6282c4',
  $publishTimeColor: '#8c8c8c',
  $dividerColor: `rgba(46, 116, 201, 0.2)`,
};

export default lightTheme;
