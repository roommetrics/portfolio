export { };

declare global {
    interface Window {
        Calendly?: {
            initPopupWidget: (opts: { url: string }) => void;
            showPopupWidget?: (url: string) => void; // legacy fallback
            closePopupWidget?: () => void;
        };
    }
}
