export { };

declare global {
    interface Window {
        Calendly?: {
            showPopupWidget: (url: string) => void;
        };
    }
}