import React from 'react';
import NavigationBar from '../components/NavigationBar';

const PageTemplate = (
    props: {
        children: React.ReactNode
    }
) => {


    return (
        <div className="p-[20px]">
            {props.children}
            <div className="fixed inset-x-0 bottom-0">
                <NavigationBar/>
            </div>
        </div>

    )
}


export default PageTemplate;