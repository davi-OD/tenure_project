'use client'

import { RxDashboard, RxPerson, RxSketchLogo, RxBell, RxPencil2 } from 'react-icons/rx'
import { TbArrowsLeftRight } from "react-icons/tb";
import { FiSettings } from 'react-icons/fi'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Home', href: '/dashboard', icon: RxDashboard },
    {
        name: 'Notifications',
        href: '/dashboard/notifications',
        icon: RxBell,
    },
    { name: 'Land Records', href: '/dashboard/landRecords', icon: RxPencil2 },
    { name: 'Transactions', href: '/dashboard/transactions', icon: TbArrowsLeftRight },
    { name: 'Settings', href: '/dashboard/settings', icon: FiSettings },
    { name: 'Profile', href: '/dashboard/profile', icon: RxPerson },
];

export default function NavLinks() {
    const pathname = usePathname()
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-sky-100 text-blue-600': pathname === link.href,
                            }
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
