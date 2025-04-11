import Link, { LinkProps } from 'next/link';
import { forwardRef } from 'react';

interface ExternalLinkProps extends LinkProps {
	children: React.ReactNode;
	className?: string;
}

export const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>(
	({ children, className, ...props }, ref) => {
		return (
			<Link
				ref={ref}
				className={`cursor-pointer ${className}`}
				target="_blank"
				rel="noopener noreferrer"
				{...props}
			>
				{children}
			</Link>
		);
	}
);

ExternalLink.displayName = 'ExternalLink';
