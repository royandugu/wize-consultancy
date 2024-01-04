"use client"

import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { useContext } from "react";
import { uploadImage } from "../../../../systemComponents/microFunctions/uploadImage";

import context from "../../../../systemComponents/context/context";
import IeltsDisplay from "../../../../userComponents/secondaryComponents/educationComponents/ieltsComponents/ieltsDisplay";
import ButtonDesign from "../../../../systemComponents/modules/buttonDesign";
import PopUp from "../../../../systemComponents/modules/popUp";
import { universalJSONPost } from "../../../../systemComponents/apiConnectors/system/POST";


const IeltsEditDisplay = () => {
    const { edgestore } = useEdgeStore();

    const [showPopUp,setShowPopUp]=useState(false);
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

    const [pictureOne, setPictureOne] = useState<File>();
    const [pictureTwo, setPictureTwo] = useState<File>();

    const [imageOne, setImageOne] = useState("/images/young-girl-reading-book-headphones.jpg");
    const [imageTwo, setImageTwo] = useState("/images/entrepreneurs-meeting-office.jpg")

    const contextContainer = useContext(context);

    const commonSubmitter = async (func: (body: any, url: string) => Promise<any>, url: string, dataOne: string, dataTwo: string) => {
        const staticFormBody = {
            titleOne: ieltsTextSection.titleOne,
            paraOne: ieltsTextSection.paraOne,
            pointParasOne: ieltsTextSection.pointParas,
            titleTwo: ieltsTextSection.titleTwo,
            paraTwo: ieltsTextSection.paraTwo,
            pointParasTwo: ieltsTextSection.pointParas2,
            titleThree: ieltsTextSection.titleThree,
            paraThree: ieltsTextSection.paraThree,
            pictureOne: dataOne,
            pictureTwo: dataTwo
        }

        console.log(staticFormBody);

        const response = await func(staticFormBody, url);
        console.log(response);
        
        return response;
        
    }

    const submitForm = async (e: any) => {
        e.preventDefault();
        contextContainer.setLoading(0);
        try {
            const { data: dataOne, status } = await uploadImage(pictureOne, edgestore);
            if (status) {
                const { data: dataTwo, status: statusTwo } = await uploadImage(pictureOne, edgestore);
                if (statusTwo) {
                    const response = await commonSubmitter(universalJSONPost, "/admin/education/ielts", dataOne, dataTwo);
                    console.log(response);
                    if (response) {
                        if (response.ok) {
                            contextContainer.setLoading(2);
                        }
                        else contextContainer.setLoading(3);
                    }
                }
            }
            else if (status === false) {
                contextContainer.setLoading(3);
            }
        }
        catch (err) {
            console.log(err);
            contextContainer.setLoading(3);
        }
    }


    return (
        <>
            <IeltsDisplay isAdmin={true} ieltsTextSection={ieltsTextSection} setIeltsTextSection={setIeltsTextSection} pictureOne={pictureOne} pictureTwo={pictureTwo} setPictureOne={setPictureOne} setPictureTwo={setPictureTwo} imageOne={imageOne} setImageOne={setImageOne} imageTwo={imageTwo} setImageTwo={setImageTwo} />
            <div className="flex gap-5 mt-5">
                <button onClick={()=>setShowPopUp(true)}> <ButtonDesign text="Confirm changes" noArrow={true}/></button>
                <button> <ButtonDesign text="Discard changes" noArrow={true} /></button>
            </div>
            <PopUp title="Event Publishment" body={"Do you want to update the IELTS page ?" } buttonTexts={["Update changes"]} showPopUp={showPopUp} setShowPopUp={setShowPopUp} functionLists={[submitForm]} contextContainer={contextContainer} finalMessage={"The IELTS page has been updated"} errorMessage={"Error updating the IELTS page"} />

        </>)
}

export default IeltsEditDisplay;