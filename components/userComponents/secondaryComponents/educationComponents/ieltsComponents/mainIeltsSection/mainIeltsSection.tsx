import StudyAbroadForm from "../../../../ternaryComponents/studyAbroadForm";

const MainIeltsSection = () => {
    return (
        <div className="bg-sky-bg pt-10 pb-10">
            <div className="flex flex-col md:flex-row">
                <StudyAbroadForm/>
                <div className="pl-10 pr-10 md:pr-20">
                    <h1 className="font-bold text-[20px] mt-5"> Why Choose IELTS? </h1>
                    <img alt="girl-reading-book" src="/images/young-girl-reading-book-headphones.jpg" className="w-full mt-5 mb-5" />
                    <ul className="list-disc list-inside pt-2">
                         IELTS is one of the world's most recognized and respected English language proficiency tests. It's your passport to international study, work, and migration opportunities. Here's why IELTS is your pathway to success:
                        <li className="mb-2 mt-3">Global Recognition: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">IELTS is accepted by over 11,000 organizations in more than 140 countries, making it a truly global language assessment..</span>
                        </div>
                        <li className="mb-2 mt-3">Academic and General Training:  </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">IELTS offers two modules: Academic and General Training, catering to your specific goals, whether it's for higher education, work, or immigration.</span>
                        </div>
                        <li className="mb-2 mt-3">Comprehensive Assessment: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">IELTS evaluates all aspects of your English language skills, including listening, reading, writing, and speaking, providing a holistic measurement of your abilities.</span>
                        </div>
                        <li className="mb-2 mt-3">Accurate and Fair:</li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">IELTS is renowned for its rigorous testing standards, ensuring fairness and accuracy in assessing your language proficiency.</span>
                        </div>
                    </ul>
                    <h1 className="font-bold text-[20px] mt-5"> Our IELTS Services : </h1>
                    <img alt="entrepreneurs-meeting" src="/images/entrepreneurs-meeting-office.jpg" className="w-full mt-5 mb-5" />
                    <ul className="list-disc list-inside pt-2">
                        Wize Consult is your partner in IELTS success. We offer a range of services to help you excel in the IELTS examination:
                        <li className="mb-2 mt-3">Comprehensive Preparation: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">Our expert instructors provide comprehensive IELTS preparation courses, equipping you with the skills and strategies needed to excel in each test component.</span>
                        </div>
                        <li className="mb-2 mt-3">Practice Tests:  </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">We offer realistic practice tests that mimic the actual IELTS exam conditions, allowing you to gauge your progress and build confidence.</span>
                        </div>
                        <li className="mb-2 mt-3">Personalized Coaching: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">Our tutors work closely with you, identifying your strengths and weaknesses to tailor a personalized study plan that maximizes your chances of success.</span>
                        </div>
                        <li className="mb-2 mt-3">Test Strategies:</li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">We provide valuable insights and strategies for each IELTS module, helping you approach the test with confidence.</span>
                        </div>
                        <li className="mb-2 mt-3">Flexibility:</li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">Our courses are designed to fit your schedule, offering both in-person and online options to accommodate your learning preferences.</span>
                        </div>
                    </ul>
                    <h1 className="font-bold text-[20px] mt-5"> Your IELTS Story Begins Here </h1>
                    <p className="mt-2"> Whether you're aiming for admission to a prestigious university, seeking employment opportunities abroad, or pursuing your dreams of immigration, IELTS is your steppingstone. With Wize Consult as your guide, you'll not only prepare effectively but also embark on a journey towards English language proficiency and success in your endeavours.  </p>
                    <p className="mt-2">Ready to take the first step towards a brighter future? Contact us today to learn more about our IELTS preparation courses and how we can help you achieve your goals. Your success in the IELTS examination is our mission!</p>
                </div>
            </div>
        </div>
    )
}
export default MainIeltsSection;