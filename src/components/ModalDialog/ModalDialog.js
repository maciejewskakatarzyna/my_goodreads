import React from "react";
import Portal from "../Portal/Portal";

function ModalDialog({children }) {
    return (
        <Portal>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0,0,0, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <div>
                   {children}
                </div>
            </div>
        </Portal>
    );
}

export default ModalDialog