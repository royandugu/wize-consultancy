import { useRouter } from "next/router";

import Login from "../../../../components/systemComponents/loginAndRegister/login";

const Page=()=>{
    const router=useRouter();

    return <Login isAdmin={true} router={router}/>
}
export default Page;