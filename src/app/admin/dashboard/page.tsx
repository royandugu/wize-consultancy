"use client"
import dynamic from "next/dynamic";

const DashboardDisplay = dynamic(() => import('../../../../components/adminComponents/secondaryComponents/dashboardDisplay'), { ssr: false })

const Page=()=>{
    if(typeof window!==undefined) return <DashboardDisplay/>
    else return <h5> Window error </h5>
}
export default Page;