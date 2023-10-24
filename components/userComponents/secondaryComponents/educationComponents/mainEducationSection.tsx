import StudyAbroadForm from "../../ternaryComponents/studyAbroadForm";

const MainEducationSection = () => {
    return (
        <div className="bg-sky-bg pt-10 pb-10">
            <div className="flex flex-col md:flex-row">
                <StudyAbroadForm/>
                <div className="pl-10 pr-10 md:pr-20">
                    <h1 className="font-bold"> Why Choose Australia for Education? </h1>
                    <img src="/images/Student potrait.jpg" className="w-full mt-5 mb-5" />
                    
                    <p className="mt-5">Australia is renowned for its excellence in education, and here's why it stands out:</p>
                    <ul className="list-disc list-inside pt-2">
                        <li className="mb-2">World-Class Institutions: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">Australia is home to some of the world's top universities and institutions, consistently ranking high in global education rankings.</span>
                        </div>
                        <li className="mb-2 mt-3">Diverse Courses: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">From business and engineering to arts and healthcare, you'll find a wide array of courses tailored to your interests and career aspirations.</span>
                        </div>
                        <li className="mb-2 mt-3">Multicultural Environment: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">Studying in Australia means joining a multicultural community where you can interact with students from all over the world, gaining a global perspective.</span>
                        </div>
                        <li className="mb-2 mt-3">Innovative Teaching: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">Australian institutions employ cutting-edge teaching methods, fostering critical thinking and practical skills.</span>
                        </div>
                        <li className="mb-2 mt-3">Work Opportunities: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">Australia provides opportunities for international students to gain practical work experience during and after their studies.</span>
                        </div>
                    </ul>
                    <h5 className="mt-5"> Our Education Services : </h5>
                    <img src="/images/Teaching.jpg" className="w-full mt-5 mb-5" />
                    <p className="mt-5"> We are committed to guiding you through every aspect of your educational journey in Australia:</p>
                    
                    <ul className="list-disc list-inside pt-2">
                        <li className="mb-2">Course Selection: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">We help you find the right course and institution that aligns with your career goals and interests.</span>
                        </div>
                        <li className="mb-2 mt-3">Admissions Assistance: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">Our experts assist you in the application process, ensuring all documents are correctly prepared and submitted.</span>
                        </div>
                        <li className="mb-2 mt-3">Visa Guidance:  </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">Navigating the visa process can be complex. We provide step-by-step guidance to streamline your visa application.</span>
                        </div>
                        <li className="mb-2 mt-3">Pre-Departure Support: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">We equip you with essential information about living in Australia, from accommodation options to local culture and lifestyle.</span>
                        </div>
                        <li className="mb-2 mt-3">Post-Arrival Assistance:</li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">Our support doesn't end when you land in Australia. We continue to assist you in settling into your new environment.</span>
                        </div>
                    </ul>
                    
                    <h1 className="font-bold text-[20px] mt-5"> Study in Australia - Your Future Awaits </h1>
                    <p className="mt-2">Australia is not just a destination for education; it's a destination for personal growth, cultural enrichment, and exciting opportunities.  Wize Consult will guide you towards your first step for a fulfilling and enriching academic experience in this beautiful country.</p>
                    <p className="mt-2">Begin your educational journey with us, and let's pave the way to a brighter future together. Explore our website for more information or get in touch with our dedicated team for personalized guidance. Your educational adventure in Australia starts here.</p>
                </div>
            </div>
        </div>
    )
}
export default MainEducationSection;