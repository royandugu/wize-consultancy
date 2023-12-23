import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const nextAuthSecret=process.env.NEXTAUTH_SECRET;

if (!clientId || !clientSecret || !nextAuthSecret) {
  throw new Error("CLIENT_ID or CLIENT_SECRET or NEXT AUTH SECRET must be defined in the environment");
}
export const options = {
    providers: [
      GoogleProvider({
        clientId: clientId,
        clientSecret: clientSecret
      }),
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "email", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid.
          // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
          // You can also use the `req` object to obtain additional parameters
          // (i.e., the request IP address)
  
          const testValidation={email:"hello@gmail.com", password:"1234"}
         
          // const res = await fetch("/your/endpoint", {
          //   method: 'POST',
          //   body: JSON.stringify(credentials),
          //   headers: { "Content-Type": "application/json" }
          // })
          // const user = await res.json()
    
          // If no error and we have user data, return it
          if (credentials?.email === testValidation.email && credentials?.password === testValidation.password) {
            return JSON.parse(JSON.stringify(testValidation));
          }
          // Return null if user data could not be retrieved
          return null
        }
      })
      
    ],
    secret:nextAuthSecret
  };