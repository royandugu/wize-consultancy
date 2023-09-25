import { AiOutlineArrowRight } from "react-icons/ai"

const ButtonDesign = () => {
    return (
        <div className="mainGradient pl-10 pr-3 pt-1 pb-1 text-white rounded-md flex align-center justify-between">
            <p> Contact&nbsp;Us </p>
            <button className="bg-grad-two p-1 ml-3"> <AiOutlineArrowRight /> </button>
        </div>
    )
}

export default ButtonDesign;