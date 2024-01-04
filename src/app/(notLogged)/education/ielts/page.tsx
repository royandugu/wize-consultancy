"use client"

import IeltsDisplay from "../../../../../components/userComponents/secondaryComponents/educationComponents/ieltsComponents/ieltsDisplay";
import { useState } from "react";

const Page=()=>{
    const [ieltsTextSection, setIeltsTextSection] = useState({
        titleOne: "Why Choose IELTS? ",
        paraOne: "IELTS is one of the world's most recognized and respected English language proficiency tests. It's your passport to international study, work, and migration opportunities. Here's why IELTS is your pathway to success:",
        pointParas: [{
            point: "Global Recognition:", para: "IELTS is accepted by over 11,000 organizations in more than 140 countries, making it a truly global language assessment.."
        },
        { point: "Academic and General Training:", para: "IELTS offers two modules: Academic and General Training, catering to your specific goals, whether it's for higher education, work, or immigration." },
        { point: "Comprehensive Assessment:", para: "IELTS evaluates all aspects of your English language skills, including listening, reading, writing, and speaking, providing a holistic measurement of your abilities." },
        { point: "Accurate and Fair:", para: "IELTS is renowned for its rigorous testing standards, ensuring fairness and accuracy in assessing your language proficiency." }],
        titleTwo: "Our IELTS Services : ",
        paraTwo: "Wize Consult is your partner in IELTS success. We offer a range of services to help you excel in the IELTS examination:",
        pointParas2: [{
            point: "Comprehensive Preparation:", para: "Our expert instructors provide comprehensive IELTS preparation courses, equipping you with the skills and strategies needed to excel in each test component."
        },
        { point: "Practice Tests:", para: "We offer realistic practice tests that mimic the actual IELTS exam conditions, allowing you to gauge your progress and build confidence." },
        { point: "Personalized Coaching:", para: "Our tutors work closely with you, identifying your strengths and weaknesses to tailor a personalized study plan that maximizes your chances of success." },
        { point: "Test Strategies:", para: "We provide valuable insights and strategies for each IELTS module, helping you approach the test with confidence." },
        { point: "Flexibility:", para: "Our courses are designed to fit your schedule, offering both in-person and online options to accommodate your learning preferences." }],
        titleThree: "Your IELTS Story Begins Here",
        paraThree: " Whether you're aiming for admission to a prestigious university, seeking employment opportunities abroad, or pursuing your dreams of immigration, IELTS is your steppingstone. With Wize Consult as your guide, you'll not only prepare effectively but also embark on a journey towards English language proficiency and success in your endeavours.Ready to take the first step towards a brighter future? Contact us today to learn more about our IELTS preparation courses and how we can help you achieve your goals. Your success in the IELTS examination is our mission!"

    })

    const [pictureOne,setPictureOne]=useState<File>();
    const [pictureTwo,setPictureTwo]=useState<File>();

    const [imageOne,setImageOne]=useState("/images/young-girl-reading-book-headphones.jpg");
    const [imageTwo,setImageTwo]=useState("/images/entrepreneurs-meeting-office.jpg")

    return <IeltsDisplay isAdmin={true} ieltsTextSection={ieltsTextSection} setIeltsTextSection={setIeltsTextSection} pictureOne={pictureOne} pictureTwo={pictureTwo} setPictureOne={setPictureOne} setPictureTwo={setPictureTwo} imageOne={imageOne} setImageOne={setImageOne} imageTwo={imageTwo} setImageTwo={setImageTwo}/>
}
export default Page;