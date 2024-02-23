import React from "react";
import PageTemplate from "./PageTemplate";
import NavigationBar from "../components/NavigationBar";
import TopAppBar from "../components/TopAppBar";

const LayoutTemplate = (props: { children: React.ReactNode }) => {
    return (
        <>
            <div className="fixed top-0 w-full insert-x-0 z-10">
                <TopAppBar/>
            </div>
            <PageTemplate>
                <div className="overflow-x pt-16">
                    {props.children}
                </div>
            </PageTemplate>
            <div className="fixed inset-x-0 bottom-0">
                <NavigationBar/>
            </div>
        </>
    )
}

export default LayoutTemplate;