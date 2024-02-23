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
        <div className="bg-gradient-to-r from-lime-400 to-lim-600 h-full w-full">
        <div className="flex justify-center items-center ">
            <div>{props.children}</div> 
        </div>
        </div>
    )
}

export default PageTemplate;