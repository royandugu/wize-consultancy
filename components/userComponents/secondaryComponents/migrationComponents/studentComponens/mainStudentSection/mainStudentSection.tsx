import StudyAbroadForm from "../../../../ternaryComponents/studyAbroadForm";

const MainStudentSection = () => {
    return (
        <div className="bg-sky-bg pt-10 pb-10">
            <div className="flex flex-col md:flex-row gap-5">
                <StudyAbroadForm/>
                <div className="pl-10 pr-10 md:pr-20">
                    <h5> Australia boasts world-renowned universities, a diverse range of courses, and a multicultural atmosphere that enriches your learning experience. Whether you're pursuing higher studies, vocational training, or English language courses, Australia has something for everyone. </h5>
                    <img alt="cheerful-attractive-young-woman" src="/images/cheerful-attractive-young-woman-with-black-hair-walking.jpg" className="w-full mt-5 mb-5" />
                    <h1 className="font-bold text-[20px]"> Documents Required for a Student Visa </h1>
                    <h5 className="mt-2 text-[rgb(90,90,90)]"> Before embarking on your student visa application, it's essential to have a well-prepared collection of documents. Ensuring that all your paperwork is in order can significantly simplify the process and reduce any potential challenges.</h5>
                    <h5 className="mt-2 text-[rgb(90,90,90)]"> The documentation required for your student visa application encompasses: </h5>
                    <ul className="list-disc list-inside pt-2">
                        <li className="mb-2"><span className="text-[rgb(90,90,90)]">A valid <span className="text-black">password </span></span></li>
                        <li className="mb-2"><span className="text-[rgb(90,90,90)]"><span className="text-black">Verification of enrollment</span> from a recognized educational institution</span></li>
                        <li className="mb-2"><span className="text-[rgb(90,90,90)]">Confirmation of proficiency in the  <span className="text-black">English language (such as IELTS, PTE scores)</span></span></li>
                        <li className="mb-2"><span className="text-[rgb(90,90,90)]">Photographs and valid photo identification</span></li>
                        <li className="mb-2"><span className="text-[rgb(90,90,90)]">Official  <span className="text-black">admission letter</span> from the educational institution </span></li>
                        <li className="mb-2"><span className="text-[rgb(90,90,90)]">Documentation of<span className="text-black">approved student loans </span></span></li>
                        <li className="mb-2"><span className="text-[rgb(90,90,90)]">Academic transcripts and certificates </span></li>
                        <li className="mb-2"><span className="text-[rgb(90,90,90)]">Proof of overseas <span className="text-black">student health coverage</span></span></li>
                        
                    </ul>
                    <h5 className="mt-2">The details outline the standard documentation needed for initiating a Student Visa application for Australia.</h5>
                    <img alt="you-are-all-set-your-vacations" src="/images/you-are-all-set-your-vacations-sales-representative-giving-passports-plane-tickets-young-woman-man-their-holiday-trip-travel-agency.jpg" className="w-full mt-5 mb-5" />
                    <h1 className="font-bold text-[20px]"> Our Services: </h1>
                    <ul className="list-disc list-inside pt-2">
                        <li className="mb-2">Course Selection: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">Choosing the right course is the foundation of a successful educational journey. Our experts will guide you through the available options based on your interests and goals.</span>
                        </div>
                        <li className="mb-2 mt-3">Visa Application: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">We'll assist you in preparing and submitting a comprehensive student visa application, ensuring that all necessary documents are in order.</span>
                        </div>
                        <li className="mb-2 mt-3">Financial Guidance: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">Understanding the financial aspects of studying abroad is crucial. We'll provide you with information on tuition fees, living expenses, and any financial requirements for your visa application.</span>
                        </div>
                        <li className="mb-2 mt-3">Health Insurance:  </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">Health insurance is a mandatory requirement for international students in Australia. We'll help you find a suitable health insurance plan that meets the visa requirements.</span>
                        </div>
                        <li className="mb-2 mt-3">Post-Study Options: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">Explore the opportunities to extend your stay in Australia after completing your studies. Our team can provide insights into post-study work visas and other pathways.</span>
                        </div>
                    </ul>
                    <h1 className="font-bold text-[20px] mt-5"> Disclaimer: </h1>
                    <h5 className="mt-2"> We are not affiliated with any government agency. Our services are designed to assist and simplify the migration process, but the final decisions lie with the relevant immigration authorities. </h5>
                </div>
            </div>
        </div>
    )
}
export default MainStudentSection;