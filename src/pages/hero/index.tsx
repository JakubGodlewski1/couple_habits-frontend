import MobileView from "./MobileView.tsx";
import useResizeObserver from "../../hooks/useResizeObserver.tsx";
import DesktopView from "./DesktopView.tsx";
import {SCREEN_THRESHOLD} from "../../utils/constants.ts";

const Hero = () => {

    //if screen width is greater than the threshold, the function returns true
    const isDesktop = useResizeObserver(SCREEN_THRESHOLD);

    return isDesktop ? <DesktopView/> : <MobileView/>;
};

export default Hero;