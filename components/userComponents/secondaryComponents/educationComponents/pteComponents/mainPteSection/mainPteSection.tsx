import StudyAbroadForm from "../../../../ternaryComponents/studyAbroadForm";

const MainPteSection = () => {
    return (
        <div className="bg-sky-bg pt-10 pb-10">
            <div className="flex flex-col md:flex-row">
                <StudyAbroadForm/>
                <div className="pl-10 pr-10 md:pr-20">
                    <h1 className="font-bold text-[20px]"> Why Choose PTE ?</h1>
                    <img src="/images/Student.jpg" className="w-full mt-5 mb-5" />
                    <p className="mt-5"> PTE is a globally recognized English language proficiency test that opens doors to international study, employment, and immigration opportunities. Here's why PTE is the right choice for your journey: </p>
                    <ul className="list-disc list-inside pt-2">
                        <li className="mb-2 mt-3">Global Acceptance: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">PTE is accepted by thousands of universities, colleges, and organizations worldwide, making it a universally acknowledged language assessment.</span>
                        </div>
                        <li className="mb-2 mt-3">Fast and Reliable Results:  </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">PTE provides rapid score results, often within just a few days, allowing you to meet tight application deadlines.</span>
                        </div>
                        <li className="mb-2 mt-3">Fair and Unbiased Scoring: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">PTE employs state-of-the-art AI technology to ensure impartial and precise scoring, maintaining the highest levels of accuracy and fairness.</span>
                        </div>
                        <li className="mb-2 mt-3">Comprehensive Assessment:</li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">PTE evaluates all aspects of your English language skills, including listening, reading, writing, and speaking, providing a well-rounded measure of your abilities.</span>
                        </div>
                    </ul>
                    <h1 className="font-bold text-[20px] mt-5"> Our PTE Services </h1>
                    <img src="/images/Teaching.jpg" className="w-full mt-5 mb-5" />
                    <p className="mt-2"> Wize Consult is your dedicated partner in PTE success. We offer a range of services designed to help you excel in the PTE examination: </p>
                    <ul className="list-disc list-inside">
                        <li className="mb-2 mt-3">Comprehensive Preparation: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">Our expert instructors deliver comprehensive PTE preparation courses, equipping you with the skills and strategies needed to excel in each test component.</span>
                        </div>
                        <li className="mb-2 mt-3">Practice Tests:  </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">We provide realistic practice tests that closely mimic the actual PTE exam conditions, allowing you to track your progress and boost your confidence.</span>
                        </div>
                        <li className="mb-2 mt-3">Personalized Coaching: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">Our tutors work closely with you, identifying your strengths and areas for improvement to create a tailored study plan that maximizes your chances of success.</span>
                        </div>
                        <li className="mb-2 mt-3">Test Strategies:</li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">We offer valuable insights and strategies for each PTE module, empowering you to approach the test with confidence and efficiency.</span>
                        </div>
                        <li className="mb-2 mt-3">Flexible Learning:</li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">Our courses are designed to suit your schedule, offering both in-person and online options to accommodate your unique learning preferences and constraints.</span>
                        </div>
                    </ul>
                    <h1 className="font-bold text-[20px] mt-5"> Your PTE Success Story Starts Here </h1>
                    <p className="mt-2">Whether you aspire to gain admission to a prestigious educational institution, pursue an international career, or embark on a journey of immigration, PTE is your key to unlocking a world of opportunities. With Wize Consult as your trusted guide, you'll not only prepare effectively but also embark on a journey towards English language proficiency and success in your endeavors.</p>
                    <p className="mt-2">Ready to take the first step towards a brighter future? Contact us today to discover more about our PTE preparation courses and how we can help you achieve your goals. Your success in the PTE examination is our mission!</p>
                </div>
            </div>
        </div>
    )
}
export default MainPteSection;