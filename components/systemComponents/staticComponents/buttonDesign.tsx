import { AiOutlineArrowRight } from "react-icons/ai"

interface ButtonDesignProps{
    text:string,
}

const ButtonDesign = ({text}:ButtonDesignProps) => {
    return (
        <button className="mainGradient pl-10 pr-3 pt-1 pb-1 text-white rounded-md flex align-center justify-between">
            {(text) && text.split(' ').map((word, index) => (
                <span key={index}>
                    {word}
                    {index < text.split(' ').length - 1 && <>&nbsp;</>}
                </span>
            ))}
            <div className="bg-grad-two p-1 ml-3"> <AiOutlineArrowRight /> </div>
        </button>
    )
}

export default ButtonDesign;