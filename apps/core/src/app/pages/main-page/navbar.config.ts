import { NavbarItem } from '@mustache/basic-ui';

export const NAVBAR_CONFIG: NavbarItem[] = [
  {
    title: 'Home',
    route: 'home',
  },
  {
    title: 'Packages',
    route: 'packages',
    leafs: [
      {
        title: 'Basic',
        route: 'basic-ui',
        iconSrc: 'assets/icons/components.svg',
      },
      {
        title: 'Forms',
        route: 'forms-ui',
        iconSrc: 'assets/icons/components.svg',
      },
      {
        title: 'Auth',
        route: 'auth-ui',
        iconSrc: 'assets/icons/components.svg',
      },
    ],
  },
];
