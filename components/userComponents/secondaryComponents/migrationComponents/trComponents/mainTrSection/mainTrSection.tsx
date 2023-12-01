const MainTrSection = () => {
    return (
        <div className="bg-sky-bg pt-10 pb-10 md:pl-[13.4%] md:pr-[13.4%]">
            <div className="pl-10 pr-10 md:pr-20">
                <h1 className="font-bold text-[20px] mt-5"> Basic Eligibility</h1>
                <h5 className="mt-5"> You must : </h5>
                <ul className="list-disc list-inside pt-2">
                    <li className="mb-2"><span className="text-[rgb(90,90,90)]">Be under <span className="text-black">50 years of age.</span></span></li>
                    <li className="mb-2"><span className="text-[rgb(90,90,90)]"> hold an eligible visa</span></li>
                    <li className="mb-2"><span className="text-[rgb(90,90,90)]">have held a student visa in the   <span className="text-black">last 6 months</span></span></li>
                    <li className="mb-2"><span className="text-[rgb(90,90,90)]">have a recent qualification in a CRICOS-registered course</span></li>
                    <li className="mb-2"><span className="text-[rgb(90,90,90)]"><span className="text-black">nominate one stream only</span> - it is not possible to change visa streams after you apply</span></li>
                    <li className="mb-2"><span className="text-[rgb(90,90,90)]">attach specified evidence when you apply</span></li>

                </ul>

                <h1 className="font-bold text-[20px] mt-10">Application Process:</h1>
                <img alt="couple" src="/images/Couple.jpg" className="w-full mt-5 mb-5" />
                <p> Once you meet the above criteria, the subsequent step involves assembling the necessary documentation to apply for the visa. Required documents encompass:</p>
                <ul className="list-disc list-inside pt-5">
                    <li className="mb-2"><span className="text-light-black">Proof of identity such as <span className="text-black"> passport or national ID. </span></span></li>
                    <li className="mb-2"><span className="text-light-black"> Academic records like academic transcripts and testamur.</span></li>
                    <li className="mb-2"><span className="text-light-black"><span className="text-black">Health insurance documentation,</span> including a letter from the insurance provider.</span></li>
                    <li className="mb-2"><span className="text-light-black">Character-related documents like<span className="text-black"> police clearance.</span> </span></li>
                </ul>
                <p className="mt-5"> If family members are included in the application, their identity documents and supporting materials must also be prepared.</p>
                <p className="mt-2"> If you're seeking to embark on this visa journey, don't hesitate to get in touch with us. Our team is here to guide you through the application process and provide expert assistance at every step.</p>
                <h1 className="font-bold text-[20px] mt-10">Our Services:</h1>
                <img alt="visa" src="/images/Visa.jpg" className="w-full mt-5 mb-5" />
                <ul className="list-disc list-inside pt-2">
                        <li className="mb-2">Visa Eligibility Assessment:  </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]"> Our experts will assess your qualifications and goals to determine the most suitable temporary residence visa category for you.</span>
                        </div>
                        <li className="mb-2 mt-3">Application Assistance:</li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">We'll assist you in preparing and lodging your temporary residence visa application, ensuring all required documents are complete and accurate.</span>
                        </div>
                        <li className="mb-2 mt-3">Sponsorship and Nominations: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">If your temporary residence requires sponsorship or nomination, we'll guide you through the process, whether you're an employer or an individual seeking sponsorship.</span>
                        </div>
                        <li className="mb-2 mt-3">Visa Extensions: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">Health insurance is a mandatory requirement for international students in Australia. We'll help you find a suitable health insurance plan that meets the visa requirements.</span>
                        </div>
                        <li className="mb-2 mt-3">Post-Study Options: </li>
                        <div className="pl-4 mt-[-5px]">
                            <span className="text-[rgb(90,90,90)]">If you're already on a temporary visa and wish to extend your stay, we'll help you navigate the extension process and maintain compliance..</span>
                        </div>
                    </ul>
            </div>
        </div>
    )
}
export default MainTrSection;