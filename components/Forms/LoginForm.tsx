"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/lib/formSchema'
import { useUserStore } from '@/stores/userStore';
import { socialButtonsData } from "./socialButtonsData";

type FormValues = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {

  const userStore = useUserStore();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // if the user is already logged in, redirect to the dashboard page
  if(userStore.isLoggedIn) {
    router.push("/");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  });

  // send data to the "/api/auth/login" route1
  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);

      // Adjust userData to using email and password
      const userData = {
        email: data.email,
        password: data.password,
      };

      const apiUrl = process.env.NEXT_PUBLIC_API_URL + "/api/auth/login";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        reset();

        // Extract and store user data
        const responseData = await response.json();
        // console.log("response data:",responseData);

        // Extract the token and user data from the response
        const { fullName, token } = responseData.data;

        // Store token and user data in state management store
        userStore.setLoggedIn(token, fullName);

        router.push("/") // Redirect to the home page

      } else {
        // If the response is not OK, try to parse the error message from the response
        const errorData = await response.json();
        alert(errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false); // Re-enable submit button
    }
  };

  return (
    <section className="flex items-center justify-center h-screen bg-blue-100">
      <div className="flex flex-col items-center justify-center gap-16 w-full max-w-96 p-8 rounded-2xl bg-blue-200">

      <div className="flex flex-col items-center justify-center gap-4">
        <Link href="/">
          <Image src={"/icons/logo.svg"} alt="logo" width={64} height={64} />
        </Link>

        <h1 className=" font-bold">KargaKarga</h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 w-full max-w-96">

        <form onSubmit={handleSubmit(onSubmit)}  
          className="flex flex-col items-center justify-center gap-2 w-full max-w-96">

          <input {...register("email")}
            type="email" name="email" required autoFocus
            placeholder="E-posta adresi giriniz..."
            className="w-full h-12 py-2 px-4 rounded-md border-none outline-none font-semibold focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}

          <input {...register("password")}
            type="password" name="password" required autoFocus
            placeholder="Şifre giriniz..."
            className="w-full h-12 py-2 px-4 rounded-md border-none outline-none font-semibold focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}

          <button className=" flex flex-row items-center justify-center relative w-full h-12 rounded-md border-none cursor-pointer bg-[#109010] font-semibold text-base"
            type="submit" disabled={isSubmitting}
          >
            <Image src="/icons/mail-white.svg" alt="email" width={32} height={32} 
              className="absolute left-4"
            />
            <span className="text-white">{isSubmitting ? "Giriş Yapılıyor... " : "Giriş Yap"}</span>
          </button>

        </form>

        <div className="flex flex-row items-center justify-center gap-20 w-full h-8">
          <hr className="bg-foreground rotate-90 h-24 w-[1px]" />
          <span className="">veya</span>
          <hr className="bg-foreground rotate-90 h-24 w-[1px]" />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 w-full max-w-96">
          {socialButtonsData.map((button) => (
            <button
              key={button.id}
              className={`"flex flex-row items-center justify-center relative w-full h-12 rounded-md border-none cursor-pointer" ${button.color} ${button.background}`}
              // onClick event handler
            >
              <Image src={button.icon} alt={button.id} width={28} height={28} 
                className="absolute left-4"
              />
              <span>{button.title}</span>
            </button>
          ))}
        </div>

      </div>

      </div>
    </section>
  )
}

export default LoginForm