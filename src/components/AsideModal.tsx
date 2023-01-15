import { useEffect } from "react";

export interface AsideModalProps {
    children: any;
    visible: boolean;
    handleClose: Function;
}

export const AsideModal = ({ children, visible, handleClose }: AsideModalProps) => {

    useEffect(() => {
       document.body.style.overflow = visible ? "hidden" : "unset";

    }, [visible])

    return <aside className={`aside-modal ${visible ? "active" : ""}`}>
        {children}
    </aside>
};

export default AsideModal;