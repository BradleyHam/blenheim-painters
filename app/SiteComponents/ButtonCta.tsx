import { LuArrowUpRight } from 'react-icons/lu';
import Link from 'next/link';

interface ButtonCtaProps {
    text: string;
    type: number;
    className?: string;
    onClick?: () => void;
}

export default function ButtonCta({ text, type, className, onClick }: ButtonCtaProps) {
    const baseClasses = `group relative isolate inline-flex items-center justify-start gap-3 rounded-full font-semibold tracking-wide text-sm transition duration-300 ease-in-out px-4 py-2.5 shadow-[0_8px_24px_rgba(16,24,40,0.18)] hover:shadow-[0_12px_28px_rgba(16,24,40,0.22)] hover:-translate-y-0.5 active:translate-y-0 ${type === 1 ? 'bg-accent-one text-text-heading' : 'bg-cta text-cta-foreground'} ${className || ''}`;
    
    const backgroundStyle = {
        backgroundImage:
            type === 1
                ? 'linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0.1))'
                : 'linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(0,0,0,0.12))',
    };

    if (onClick) {
        return (
            <button
                onClick={onClick}
                className={baseClasses}
                style={backgroundStyle}
            >
            {/* Top highlight & inner border */}
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/15"
                style={{
                    boxShadow:
                        'inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.08)'
                }}
            />

            {/* Subtle texture overlay */}
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full opacity-15"
                style={{
                    backgroundImage: "url('/images/dot-grid.png')",
                    backgroundSize: '220px 220px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'overlay'
                }}
            />

            {/* Left medallion */}
            <span className="relative z-10 grid size-8 place-items-center rounded-full bg-background/80 text-cta shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_8px_rgba(16,24,40,0.25)] ring-1 ring-black/5">
                <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/70 to-background/40" />
                <LuArrowUpRight size={18} className="relative z-10 text-cta font-bold" />
            </span>

            {/* Label */}
            <span className="relative z-10 tracking-tight pr-2">
                {text}
            </span>

            {/* Right-facing sheen on hover */}
            <span
                aria-hidden
                className="pointer-events-none absolute -right-6 top-0 h-full w-16 -skew-x-12 bg-white/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded"
            />
            </button>
        );
    }

    return (
        <Link
            href="/bookingPage"
            className={baseClasses}
            style={backgroundStyle}
        >
            {/* Top highlight & inner border */}
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/15"
                style={{
                    boxShadow:
                        'inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.08)'
                }}
            />

            {/* Subtle texture overlay */}
            <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full opacity-15"
                style={{
                    backgroundImage: "url('/images/dot-grid.png')",
                    backgroundSize: '220px 220px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'overlay'
                }}
            />

            {/* Left medallion */}
            <span className="relative z-10 grid size-8 place-items-center rounded-full bg-background/80 text-cta shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_8px_rgba(16,24,40,0.25)] ring-1 ring-black/5">
                <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/70 to-background/40" />
                <LuArrowUpRight size={18} className="relative z-10 text-cta font-bold" />
            </span>

            {/* Label */}
            <span className="relative z-10 tracking-tight pr-2">
                {text}
            </span>

            {/* Right-facing sheen on hover */}
            <span
                aria-hidden
                className="pointer-events-none absolute -right-6 top-0 h-full w-16 -skew-x-12 bg-white/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded"
            />
        </Link>
    );
};
