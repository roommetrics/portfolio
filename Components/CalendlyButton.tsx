// components/CalendlyButton.tsx
'use client';

import React, { useRef, useState } from 'react';

type CalendlyButtonProps = {
    text: string;
    variant?: 'hero' | 'navbar' | 'default';
};

let calendlyPromise: Promise<void> | null = null;

type CalendlyAPI = {
    initPopupWidget: (opts: { url: string }) => void;
    showPopupWidget?: (url: string) => void;
};
type WindowWithCalendly = Window & typeof globalThis & { Calendly?: CalendlyAPI };

function loadCalendly(): Promise<void> {
    if (typeof window === 'undefined') return Promise.resolve();
    if (calendlyPromise) return calendlyPromise;

    calendlyPromise = new Promise<void>((resolve, reject) => {
        const w = window as WindowWithCalendly;
        if (w.Calendly) return resolve();

        // Ensure Calendly CSS is present
        const existingCss = document.querySelector(
            'link[href="https://assets.calendly.com/assets/external/widget.css"]'
        ) as HTMLLinkElement | null;
        let cssLoaded = !!existingCss;

        if (!existingCss) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://assets.calendly.com/assets/external/widget.css';
            link.onload = () => { cssLoaded = true; };
            link.onerror = () => { /* non-blocking */ };
            document.head.appendChild(link);
        }

        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => {
            // If CSS is still loading, wait a tick to be safe
            if (!cssLoaded) {
                setTimeout(() => resolve(), 0);
            } else {
                resolve();
            }
        };
        script.onerror = () => reject(new Error('Failed to load Calendly'));
        document.body.appendChild(script);
    });
    return calendlyPromise;
}

export default function CalendlyButton({ text, variant = 'default' }: CalendlyButtonProps) {
    const [loading, setLoading] = useState(false);
    const mountedRef = useRef(false);

    const openPopup = async () => {
        try {
            setLoading(true);
            await loadCalendly();
            const calendly = (window as WindowWithCalendly).Calendly;
            if (calendly?.initPopupWidget) {
                calendly.initPopupWidget({ url: 'https://calendly.com/roommetrics/30min' });
            } else {
                // Fallback to legacy API if present
                calendly?.showPopupWidget?.('https://calendly.com/roommetrics/30min');
            }
        } finally {
            if (mountedRef.current) setLoading(false);
        }
    };

    React.useEffect(() => {
        mountedRef.current = true;
        return () => { mountedRef.current = false; };
    }, []);

    // Style basierend auf Variante
    const getButtonStyles = () => {
        switch (variant) {
            case 'hero':
                return "group relative px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold text-lg rounded-xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105";
            case 'navbar':
                return "group relative px-4 py-2 bg-gradient-to-r from-primary to-blue-500 text-white font-medium text-sm rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105";
            default:
                return "group relative px-6 py-3 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold text-base rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105";
        }
    };

    const getIconSize = () => {
        switch (variant) {
            case 'hero':
                return "w-6 h-6";
            case 'navbar':
                return "w-4 h-4";
            default:
                return "w-5 h-5";
        }
    };

    const getGap = () => {
        switch (variant) {
            case 'hero':
                return "gap-3";
            case 'navbar':
                return "gap-2";
            default:
                return "gap-2";
        }
    };

    return (
        <button
            onClick={openPopup}
            className={getButtonStyles()}
            aria-busy={loading}
            aria-label={loading ? 'Öffne Termin-Widget…' : text}
        >
            {/* Button background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-blue-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Button text with icon */}
            <span className={`relative z-10 flex items-center ${getGap()}`}>
                {variant === 'hero' && (
                    <svg className={getIconSize()} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                )}
                <span className={variant === 'navbar' ? 'hidden sm:inline' : ''}>{loading ? 'Lade…' : text}</span>
                {variant === 'navbar' && (
                    <svg className={getIconSize()} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                )}
                {variant === 'hero' && (
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                )}
            </span>

            {/* Shine effect nur bei hero */}
            {variant === 'hero' && (
                <div className="absolute inset-0 -top-full bg-gradient-to-b from-transparent via-white/20 to-transparent group-hover:top-full transition-all duration-700 transform rotate-12"></div>
            )}
        </button>
    );
}
