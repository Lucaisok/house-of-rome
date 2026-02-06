import Link from "next/link";
import type { ComponentProps } from "react";

type NavButtonProps = Omit<ComponentProps<typeof Link>, "href"> & {
    href: string;
    className?: string;
};

export const NavButton = ({ href, className, children, ...props }: NavButtonProps) => {
    return (
        <Link href={href} className={className} {...props}>
            {children}
        </Link>
    );
};
