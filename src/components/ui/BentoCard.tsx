// src/components/ui/BentoCard.tsx
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
}

export default function BentoCard({ children, className = "" }: Props) {
    return (
        <div className={`bg-card-dark border border-white/5 rounded-2xl p-6 hover:shadow-[inset_0_0_20px_rgba(0,217,255,0.05)] transition-all ${className}`}>
            {children}
        </div>
    );
}