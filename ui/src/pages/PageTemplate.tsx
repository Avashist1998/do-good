import React from 'react';
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
        <div className="background bg-amber-100 min-h-screen w-95 mx-auto">
            <div className="flex justify-center items-center h-screen">
                <div className="content w-full bg-pink-400 bg-opacity-50 shadow-md p-8">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
// #fbfbeb, faded color for  background
// #1f2708, darker for added logo

export default PageTemplate;