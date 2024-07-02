import {IconType} from "react-icons";
import {Link, useLocation} from "react-router-dom";
import {RxDashboard} from "react-icons/rx";
import {SlSettings} from "react-icons/sl";
import {FaRegLightbulb} from "react-icons/fa";


type label = "Dashboard" | "Ideas" | "Settings"

const tabs: { label: label, href: string, icon: IconType }[] = [
    {
        label: "Ideas",
        icon: FaRegLightbulb,
        href: "/ideas"
    },
    {
        label: "Dashboard",
        icon: RxDashboard,
        href: "/dashboard"
    },
    {
        label: "Settings",
        icon: SlSettings,
        href: "/settings"
    }
]

const TabBar = () => {
    const {pathname} = useLocation()

    return (
        <div className="h-[75px] bg-white shadow-2xl pb-2 flex items-center justify-evenly">
            {tabs.map(tab => (
                <Link
                    key={tab.label}
                    to={tab.href}
                    className={`flex flex-col items-center justify-center w-24 py-1 px-6 transition-all rounded-md ${pathname.includes(tab.label.toLowerCase()) ? "bg-[#EBF4CA] scale-110 shadow-xl font-medium" : ""}`}
                >
                    <tab.icon size={20}/>
                    <span
                        className={`text-sm`}
                    >
                        {tab.label}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default TabBar;
