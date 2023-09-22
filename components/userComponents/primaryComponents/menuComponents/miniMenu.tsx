const MiniMenu=()=>{
    return(
        <div className="fixed mt-10 lg:left-32 lg:right-32 left-12 right-12 p-15 rounded-md z-10  bg-black">
            <div className="flex">
                <div className="inline">
                    <h5> Email </h5>
                    <h5> Phone </h5>
                </div>
                <div className="inline">
                    <h5> Something </h5>
                    <h5> Something else </h5>
                </div>
            </div>
        </div>
    )
}
export default MiniMenu;