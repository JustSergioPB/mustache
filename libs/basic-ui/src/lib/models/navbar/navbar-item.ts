import { NavbarLeaf } from './navbar-leaf';

export type NavbarItem = {
  title: string;
  route: string;
  leafs?: NavbarLeaf[];
};
