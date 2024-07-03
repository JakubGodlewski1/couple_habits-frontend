import {useState} from "react";
import {useSwipeable} from "react-swipeable";

export const useSwipe = () => {
    const [open, setOpen] = useState(false)

    const handlers = useSwipeable({
        onSwipeStart: (eventData) => {
            if (eventData.deltaX < 0)
                setOpen(true)
            if (eventData.deltaX >= 0){
                setOpen(false)
            }
        }, delta: 40
    });

    return {isOpen:open, handlers}
}
