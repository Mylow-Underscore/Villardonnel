export type NavLink = {
  label: string;
  href: string;
};

export type SidebarProps = {
  links: NavLink[];
  privacyPolicyUrl: string;
  cguUrl: string;
};
