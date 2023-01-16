import { useEffect, useRef } from "react";

import { useHandleClickOutside } from "../hooks/useHandleClickOutside";

export interface AsideModalProps {
    children: any;
    visible: boolean;
    handleClose: Function;
}

export const AsideModal = ({ children, visible, handleClose }: AsideModalProps) => {
    const ref = useRef(null);

    useHandleClickOutside(ref, handleClose);

    useEffect(() => {
       document.body.style.overflow = visible ? "hidden" : "unset";

    }, [visible])

    return <aside className={`aside-modal ${visible ? "active" : ""}`} ref={ref}>
        {children}
    </aside>
};

export default AsideModal;