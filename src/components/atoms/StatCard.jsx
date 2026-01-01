
export const StatCard = ({ number, label, className = "" }) => (
        <div className={`p-4 rounded-xl bg-gray-250 dark:bg-dark-200 border border-transparent hover:!border-themColor/60 transition-colors group ${className}`}>
            <h3 className="text-2xl font-bold text-darkColor dark:!text-white mb-1 group-hover:text-themColor transition-colors">
                {number}
            </h3>
            <p className="text-sm !text-secondary">{label}</p>
        </div>
    );