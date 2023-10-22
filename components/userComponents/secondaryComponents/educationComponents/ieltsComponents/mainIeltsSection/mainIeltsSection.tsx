import StudyAbroadForm from "../../../../ternaryComponents/studyAbroadForm";

const MainIeltsSection = () => {
    return (
        <div className="bg-sky-bg pt-10 pb-10">
            <div className="flex flex-col md:flex-row">
                <StudyAbroadForm/>
                <div className="pl-10 pr-10 md:pr-20">
                    <h5> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </h5>
                    <img src="/images/young-girl-reading-book-headphones.jpg" className="w-full mt-5 mb-5" />
                    <h1 className="font-bold text-[20px]"> Why Choose IELTS ?</h1>
                    <ul className="list-disc list-inside pt-5">
                        <li className="mb-2"><span className="text-light-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
                        <li className="mb-2"><span className="text-light-black"> <span className="text-black font-bold">Sed do eiusmod</span> tempor incididunt ut labore et dolore magna aliqua.</span></li>
                        <li className="mb-2"><span className="text-light-black">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span></li>
                        <li className="mb-2"><span className="text-light-black">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</span></li>
                    </ul>
                    <img src="/images/entrepreneurs-meeting-office.jpg" className="w-full mt-5 mb-5" />
                    <h1 className="font-bold text-[20px]"> Our IELTS Services </h1>
                    <ul className="list-disc list-inside pt-5">
                        <li className="mb-2"><span className="text-light-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
                        <li className="mb-2"><span className="text-light-black">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
                        <li className="mb-2"><span className="text-light-black">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</span></li>
                        <li className="mb-2"><span className="text-light-black">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</span></li>
                    </ul>
                    <h1 className="font-bold text-[20px] mt-5"> Your IELTS Story Begins Here </h1>
                    <h5> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </h5>
                </div>
            </div>
        </div>
    )
}
export default MainIeltsSection;