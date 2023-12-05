export const Register=()=>{
    return(
        <form onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="submit"/>
        </form>
    )
}
export default Register;