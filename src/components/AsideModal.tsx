import { useEffect, useRef } from "react";

export interface AsideModalProps {
    children: any;
    visible: boolean;
    handleClose: Function;
}

export const AsideModal = ({ children, visible, handleClose }: AsideModalProps) => {
    const ref = useRef(null);

    useEffect(() => {
        document.body.style.overflow = visible ? "hidden" : "unset";

    }, [visible])

    return (
        <>
            <div
                className={`aside-modal-background ${visible ? "visible" : "hidden"}`}
                onClick={() => handleClose && handleClose()}
            ></div>
            <aside className={`aside-modal ${visible ? "active" : ""}`} ref={ref}>
                {children}
            </aside>
        </>);

};

export default AsideModal;