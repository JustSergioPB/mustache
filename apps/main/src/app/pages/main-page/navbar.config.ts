export const NAVBAR_CONFIG = [
  {
    title: 'Home',
    route: 'home',
  },
  {
    title: 'Documentation',
    route: 'documentation',
  },
  {
    title: 'Components',
    route: 'components',
    leafs: [
      {
        title: 'Button',
        route: 'button',
        iconSrc: '../assets/icons/components.svg',
      },
      {
        title: 'Badge',
        route: 'badge',
        iconSrc: '../assets/icons/components.svg',
      },
    ],
  },
  {
    title: 'Pages',
    route: 'pages',
    leafs: [
      {
        title: 'Login',
        route: 'login',
        iconSrc: '../assets/icons/layout-dashboard.svg',
      },
      {
        title: 'Register',
        route: 'register',
        iconSrc: '../assets/icons/layout-dashboard.svg',
      },
    ],
  },
  {
    title: 'Apps',
    route: 'apps',
  },
];
