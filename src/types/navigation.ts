export type NavLink = {
  label: string;
  href: string;
  menu?: 'services'; // opens the services panel instead of going to href
};

export type ServicesMenuItem = {
  title: string;
  description: string;
  icon: string; // .svg in public/icons/common/services
  href?: string; // plain card until a link is added
};

export type ServicesMenuContent = {
  items: ServicesMenuItem[]; // fill the bento grid in order: tall, wide, small, small, wide, small
};
