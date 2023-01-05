import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Inputs {
  email: string;
  password: string;
}

function login() {
  const [login, setLogin] = useState(false);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();

  {
    /* TODO: pt2 30:08*/
  }
  const onSubmit: SubmitHandler<Inputs> = async () => {
    if (login) {
      // await signIn(email, password)
    } else {
      // await signUp(email, password)
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Luneflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
        alt=""
      />
      <Image
        src="/Luneflix2.png"
        alt="Vercel Logo"
        width={150}
        height={150}
        className="absolute left-4 top-4 cursor-pointer object-contain"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl">회원가입</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="이메일 주소 또는 전화번호"
              className="input"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px]  font-light text-orange-500">
                정확한 이메일 주소나 전화번호를 입력하세요.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="비밀번호"
              className="input"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-[13px]  font-light text-orange-500">
                비밀번호는 4~60자 사이여야 합니다.
              </p>
            )}
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
          onClick={() => setLogin(true)}
        >
          회원가입
        </button>

        <div className="text-[gray]">
          Netflix 회원이 아닌가요?{" "}
          <button
            className="text-white hover:underline"
            onClick={() => setLogin(false)}
          >
            지금 가입하세요.
          </button>
        </div>
      </form>
    </div>
  );
}

export default login;
