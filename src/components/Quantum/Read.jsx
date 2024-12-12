import React from "react";
import { useSearchParams } from "react-router-dom";

const Read = () => {
    const [searchParams] = useSearchParams();
    const url = searchParams.get("q");
    return (
        <div className="">
            {url && (
               <iframe src={url} className="h-[97vh] w-full" frameborder="0"></iframe>
            )}
        </div>
    );
};

export default Read;
