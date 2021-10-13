import * as React from "react";
import useDynamicAppHeight from "../hooks/zendesk/useDynamicAppHeight";

export const DynamicHeightContainer: React.FC = ({children}) => {
    const appHeightRef = useDynamicAppHeight();

    return <div className="main" ref={appHeightRef}>
        {children}
    </div>;
};
