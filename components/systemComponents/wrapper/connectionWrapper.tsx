import mongoose from "mongoose";

const ConnectionWrapper=({
    children,
}: {
    children: React.ReactNode;
})=>{
    return (
        {children}
    )
}
export default ConnectionWrapper;