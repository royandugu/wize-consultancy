interface SecondaryTitleDesignProps {
    page: string
}
const SecondaryTitleDesign = (props: SecondaryTitleDesignProps) => {
    return (
        <div className="backgroundOne">
            <div className="flex justify-center items-center gap-24 pt-72 pb-20 pr-[20%]">
                <div className="pl-[20%]">
                    <h1 className="uppercase text-[25px] xl+70:text-[45px] leading-3 mt-5"> {props.page === "about" ? 'About us': props.page==="events" && 'EVENTS'}</h1>
                    <p className=" mt-10 text-light-black uppercase text-[15px]"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="flex gap-5">
                    <h5 className="xl+70:text-[20px] text-[15px]"> Home </h5>
                    <h5 className="xl+70:text-[20px] text-[15px]"> | </h5>
                    <h5 className="xl+70:text-[20px] text-[15px] capitalize text-grad-one"> {props.page} </h5>
                </div>
            </div>
        </div>
    )
}
export default SecondaryTitleDesign;