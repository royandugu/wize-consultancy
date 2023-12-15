'use client';

import { useState } from 'react';
import { useContext } from 'react';
import { useEdgeStore } from '@/lib/edgestore';
import { universalPost } from '../apiConnectors/system/POST';

import context from '../context/context';

import "./loginAndRegister.css";
import ImageUpload from '../modules/imageUpload';

type RegisterPropType = {
  router: any
}

export default function Register(prop: RegisterPropType) {
  const [file, setFile] = useState<File>();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const contextContainer = useContext(context);

  const { edgestore } = useEdgeStore();



  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault();
    contextContainer.setLoading(0);
    try {
      if (file) {
        const res = await edgestore.publicFiles.upload({
          file,
          onProgressChange: (progress) => {
          },
        });
        const body = {
          profilePicture: res.url,
          name: name,
          email: email,
          password: password
        }
        const response = await universalPost(body, "/register", "/user/dashboard");
        if (response?.ok) prop.router.push("/user/dashboard");
      }
    }
    catch (err) {
      contextContainer.setLoading(2);
    }
  }

  if (contextContainer.loading === 0) return <h5> Registering you ... </h5>
  else if (contextContainer.loading === 2) return <h5> Error while registering user </h5>
  else {
    return (
      <form className='loginAndRegisterForm' onSubmit={registerUser}>

        <ImageUpload setFile={setFile}/>

        <input type="text" placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)} /><br />
        <input type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button type='submit'>
          Register
        </button>
      </form>
    );
  }
}