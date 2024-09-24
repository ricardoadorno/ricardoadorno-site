import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { HTMLAttributes } from 'react';

const typographyVariant = cva("", {
    variants: {
        variant: {
            heading1: "text-2xl tracking-tighter",
            heading2: "text-[1.725rem] leading-9",
            subtitle1: "md:text-[1.525rem] text-[1.125rem] leading-7",
            subtitle2: "text-[1.125rem] ",
            "body-big": "md:text-[1rem] text-[0.825rem]",
            body: "md:text-[0.875rem] text-[0.775rem]",
            "body-small": "md:text-[0.825rem] text-[0.675rem]",
            caption: "text-[0.625rem]",
            anchor: "text-[0.875rem] border-b border-accent hover:border-accent/50 focus:border-accent/50",
        },
        weight: {
            light: "font-light",
            regular: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
        },
        gradient: {
            test: "bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent",
            none: ' ',
        },
        lightness: {
            400: "text-neutral-400",
            500: "text-neutral-500",
            600: "text-neutral-600",
            700: "text-neutral-700",
            800: "text-neutral-800",
            900: "text-neutral-900",
            1000: "text-neutral-1000",
        },
    },
    defaultVariants: {
        gradient: "none",
        variant: "body",
        weight: "regular",
        lightness: 1000,
    },
});

type HTMLTags = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'span';

const defaultTagMap: Record<string, HTMLTags> = {
    heading1: 'h1',
    heading2: 'h2',
    heading3: 'h3',
    heading4: 'h4',
    'body-big': 'p',
    body: 'p',
    'body-small': 'small',
    caption: 'span',
}

interface TextProps extends VariantProps<typeof typographyVariant>, HTMLAttributes<HTMLElement> {
    as?: HTMLTags
    href?: string
}

export default function Text({ as, className, lightness, variant, weight, gradient, href, ...props }: TextProps) {

    const Component = as ? as : defaultTagMap[variant ?? "body"];

    if (href) {
        return (
            <Link href={href} {...props} className={cn(typographyVariant({ gradient, variant, weight, lightness }),
                className)}>
            </Link>
        )
    }

    return (
        <Component {...props} className={cn(typographyVariant({ gradient, variant, weight, lightness }),
            className)} />
    )
}
