type Options<T extends string> = {
    [key in T]: boolean;
};

type Props<T extends string> = {
    options: Options<T>;
    setOptions: (key: T) => void;
}

const MultiTabs = <T extends string>({options, setOptions}: Props<T>) => {
    return (
        <div className="border-1 border-white bg-white/20 flex justify-around gap-1 rounded-lg overflow-hidden p-1">
            {
                (Object.entries(options) as [T, boolean][]).map(([label, option]) => (
                    <div
                        onClick={() => setOptions(label)}
                        className={`${option ? "bg-white" : ""} p-2 last:rounded-r-md first:rounded-l-md flex-grow text-center`}
                        key={label}
                    >
                        {label}
                    </div>
                ))
            }
        </div>
    );
};

export default MultiTabs;
