"use client"

import { SetStateAction, Dispatch, useState } from "react";
import StudyAbroadForm from "../../../../ternaryComponents/studyAbroadForm";
import ButtonDesign from "../../../../../systemComponents/modules/buttonDesign";
import ImageUpload from "../../../../../systemComponents/modules/imageUpload";

type MainIeltsSection = {
    isAdmin?: Boolean,
    ieltsTextSection:any,
    setIeltsTextSection:Dispatch<SetStateAction<any>>
    setPictureOne:Dispatch<SetStateAction<any>>
    setPictureTwo:Dispatch<SetStateAction<any>>
    imageOne:string
    setImageOne:Dispatch<SetStateAction<string>>
    imageTwo:string
    setImageTwo:Dispatch<SetStateAction<string>>
}
const MainIeltsSection = ({isAdmin,ieltsTextSection,setIeltsTextSection,setPictureOne,setPictureTwo,imageOne,setImageOne,imageTwo,setImageTwo}: MainIeltsSection) => {
    const [noTrimmer,setNoTrimmer]=useState(false);
    const [noTrimmer2, setNoTrimmer2]=useState(false);
    
    return (
        <div className="bg-sky-bg pt-10 pb-10">
            <div className="flex flex-col md:flex-row">
                {!isAdmin && <StudyAbroadForm />}
                <div className={`pl-10 pr-10 md:pr-20  w-full ${isAdmin && 'w-full'}`}>
                    {isAdmin && <h1> Title one: </h1>}
                    {isAdmin ? <input type="text" className="p-5" value={ieltsTextSection.titleOne} onChange={(e) => setIeltsTextSection({ ...ieltsTextSection, titleOne: e.target.value })} /> : <h1 className="font-bold text-[20px] mt-5"> {ieltsTextSection.titleOne} </h1>}
                    
                    {isAdmin?<><div className="mt-5"/><ImageUpload setFile={setPictureOne} fullWidth={true} image={imageOne} setImage={setImageOne} noTrimmer={noTrimmer} setNoTrimmer={setNoTrimmer}/></> :
                    <img alt="girl-reading-book" src={imageOne} className="w-full mt-5 mb-5" />
                    }
                    
                    
                    <ul className="list-disc list-inside pt-2">
                        {isAdmin && <h1 className="mt-10"> Paragraph one: </h1>}
                        {isAdmin ? <input type="text" className="p-5 w-full" value={ieltsTextSection.paraOne} onChange={(e) => setIeltsTextSection({ ...ieltsTextSection, paraOne: e.target.value })} /> : <h1>{ieltsTextSection.paraOne}</h1>}
                        {isAdmin && <h1 className="mt-10"> Point and paragraph list: </h1>}
                        {ieltsTextSection.pointParas.map((pp: any, id: number) => (
                            <div key={id}>
                                {isAdmin ? <input type="text" className="p-5 w-full mt-2 mb-3" value={pp.point} onChange={(e) => {
                                    const updatedPointParas = [...ieltsTextSection.pointParas];
                                    updatedPointParas[id].point = e.target.value;
                                    setIeltsTextSection({ ...ieltsTextSection, pointParas: updatedPointParas });
                                }} /> : <li className="mb-2 mt-3">{pp.point} </li>}
                                <div className="pl-4 mt-[-5px]">
                                    {isAdmin ? <textarea className="p-5 w-full" value={pp.para} onChange={(e) => {
                                        const updatedPointParas = [...ieltsTextSection.pointParas];
                                        updatedPointParas[id].para = e.target.value;
                                        setIeltsTextSection({ ...ieltsTextSection, pointParas: updatedPointParas });
                                    }} /> : <span className="text-[rgb(90,90,90)]">{pp.para}</span>}
                                </div>
                            </div>
                        ))}
                        <div className="mt-5" />
                        <button onClick={() => setIeltsTextSection({ ...ieltsTextSection, pointParas: [...ieltsTextSection.pointParas, { point: "", para: "" }] })}><ButtonDesign text="Add points" noArrow={true} /></button>
                        <button className="ml-5" onClick={() => {
                            const updatedpointParas = [...ieltsTextSection.pointParas];
                            updatedpointParas.pop(); // Removes the last section, you can adjust this based on your requirements
                            setIeltsTextSection({ ...ieltsTextSection, pointParas: updatedpointParas });
                        }}><ButtonDesign text="Remove points" noArrow={true} /></button>
                    </ul>
                    {isAdmin && <h1 className="mt-10"> Title three: </h1>}
                    {isAdmin ? <input type="text" className="p-5 w-full" value={ieltsTextSection.paraTwo} onChange={(e) => setIeltsTextSection({ ...ieltsTextSection, paraTwo: e.target.value })} /> : <h1 className="font-bold text-[20px] mt-5"> {ieltsTextSection.paraTwo}  </h1>}
                    
                    {isAdmin?<><div className="mt-5"/><ImageUpload setFile={setPictureTwo} fullWidth={true} image={imageTwo} setImage={setImageTwo} noTrimmer={noTrimmer} setNoTrimmer={setNoTrimmer}/></> :
                    <img alt="girl-reading-book" src={imageTwo} className="w-full mt-5 mb-5" />
                    }
                    <ul className="list-disc list-inside pt-2">
                        {isAdmin && <h1 className="mt-10"> Paragraph two: </h1>}

                        {isAdmin ? <input type="text" className="p-5 w-full" value={ieltsTextSection.paraTwo} onChange={(e) => setIeltsTextSection({ ...ieltsTextSection, paraTwo: e.target.value })} /> : <h1>{ieltsTextSection.paraTwo}</h1>}
                        {isAdmin && <h1 className="mt-10"> Point and paragraph section: </h1>}

                        {ieltsTextSection.pointParas2.map((pp: any, id: number) => (
                            <div key={id}>
                                {isAdmin ? <input type="text" className="p-5 w-full mt-2 mb-3" value={pp.point} onChange={(e) => {
                                    const updatedPointParas = [...ieltsTextSection.pointParas2];
                                    updatedPointParas[id].point = e.target.value;
                                    setIeltsTextSection({ ...ieltsTextSection, pointParas2: updatedPointParas });
                                }} /> : <li className="mb-2 mt-3">{pp.point} </li>}
                                <div className="pl-4 mt-[-5px]">
                                    {isAdmin ? <textarea className="p-5 w-full" value={pp.para} onChange={(e) => {
                                        const updatedPointParas = [...ieltsTextSection.pointParas2];
                                        updatedPointParas[id].para = e.target.value;
                                        setIeltsTextSection({ ...ieltsTextSection, pointParas2: updatedPointParas });
                                    }} /> : <span className="text-[rgb(90,90,90)]">{pp.para}</span>}
                                </div>
                            </div>
                        ))}
                        <div className="mt-5" />
                        <button onClick={() => setIeltsTextSection({ ...ieltsTextSection, pointParas2: [...ieltsTextSection.pointParas2, { point: "", para: "" }] })}><ButtonDesign text="Add points" noArrow={true} /></button>
                        <button className="ml-5" onClick={() => {
                            const updatedPointParas2 = [...ieltsTextSection.pointParas2];
                            updatedPointParas2.pop(); // Removes the last section, you can adjust this based on your requirements
                            setIeltsTextSection({ ...ieltsTextSection, pointParas2: updatedPointParas2 });
                        }}><ButtonDesign text="Remove points" noArrow={true} /></button>
                    </ul>
                    {isAdmin && <h1 className="mt-10"> Title four: </h1>}
                    {isAdmin ? <input type="text" className="p-5 w-full" value={ieltsTextSection.titleThree} onChange={(e) => setIeltsTextSection({ ...ieltsTextSection, titleThree: e.target.value })} /> : <h1 className="font-bold text-[20px] mt-5"> {ieltsTextSection.titleThree}  </h1>}

                    {isAdmin && <h1 className="mt-10"> Paragraph three: </h1>}
                    {isAdmin ? <textarea className="w-full h-[100px] p-5" value={ieltsTextSection.paraThree} onChange={(e) => setIeltsTextSection({ ...ieltsTextSection, paraThree: e.target.value })} /> : <p className="mt-2"> {ieltsTextSection.paraThree} </p>}

                </div>
            </div>
        </div>
    )
}
export default MainIeltsSection;