import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'How It Works', href: '/dashboard' },
  { name: 'Our Work', href: '/dashboard' },
  { name: 'Pricing', href: '/dashboard' },
  { name: 'About Us', href: '/dashboard' },
  // {
  //   name: 'Invoices',
  //   href: '/dashboard/invoices',
  //   icon: DocumentDuplicateIcon,
  // },
  // { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            className=" items-center justify-center md:px-2  lg:px-5 md:text-xs lg:text-sm font-medium  "
          >
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
