import React from 'react';
import '../components/style.css';
// import NavigationBar from '../components/NavigationBar';

const PageTemplate = (
    props: {
        children: React.ReactNode
    }
) => {
// <div className="p-[50px]">
{/* <div className="fixed inset-x-0 bottom-0"> */}
    {/* <NavigationBar/> */}
{/* </div> */}

    return (
        <div className="background">
            <div className="content">
                        {props.children}
                    </div>
        </div>
    )
}
// #fbfbeb, faded color for  background
// #1f2708, darker for added logo

export default PageTemplate;