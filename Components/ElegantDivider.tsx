const ElegantDivider = ({ withDot = true }: { withDot?: boolean }) => (
    <div className="relative py-16">
        <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        {withDot && (
            <div className="relative flex justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                </div>
            </div>
        )}
    </div>
);

export default ElegantDivider;