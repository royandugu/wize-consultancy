import {BiPhone} from "react-icons/bi";

const OptionSection=()=>{
    return(
        <div className="bg-black text-grad-one pt-10">
            <div className="flex">
                <div className="md:w-1/2 pl-[18%]">
                    <h5 className="text-[13px]">// FEATURES //</h5>
                    <h1 className="text-[25px] text-white mt-3 mb-3"> Explore your options </h1>
                    <p className="text-white"> Explore Your Options Something </p>
                    <p className="text-white"> Something aaaaaaaaaaaaaaaaaa</p>
                    <div className="flex mt-5 mb-10 text-white items-center gap-5">
                        <div className="rounded-md p-3 mainGradient">
                            <BiPhone className="text-[30px]"/>
                        </div>
                        <h5 className="text-[30px]"> 9899889898  </h5>
                    </div>
                </div>
                <div className="hidden md:block w-1/2 relative">
                    <img src="/images/CEO.png" className="mt-[-130px]"/>
                </div> 
            </div>
            
        </div>
    )
}
export default OptionSection;