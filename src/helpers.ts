import { IItem, NavItem, IBreadcrumbItem } from './model';

export const navItems: NavItem[] = [
  {
    label: 'All Products',
    href: '/products',
  },
  {
    label: 'Categories',
    href: '/categories',
  },
      {
    label: 'About',
    href: '/about',
  },
    {
    label: 'Contact',
    href: '/contact-us',
  },
];

export  const defaultBreadCrumbItems: IBreadcrumbItem[] = [
  {
    name: 'Products',
    link: '/products',
  },
  {
    name: 'Categories',
    link: '/categories',
  },
   {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Contact Us',
    link: '/contact-us',
  },
];

export const getSubstring = (text: string, substringEnd: number): string => {
  return text?.length > substringEnd
    ? `${text?.substring(0, substringEnd)}...`
    : text;
};

export const calculateItemsTotal = (items: IItem[]): number => {
  return items
    .map((item) => ({ price: item.price, count: item.count }))
    .reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.count,
      0
    );
};

export const formatPrice = (value: number): string => {
  return value.toFixed(2);
};
