import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { IoLogoFacebook, IoLogoGithub, IoLogoTwitter, IoLogoGoogle } from 'react-icons/io5'
import { useRouter } from "next/router";

const Signup = () => {
    const route = useRouter();
    return (
        <>
            <Head>
                <title>Sign Up</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-image absolute inset-0">
                <div className="bg-black h-full opacity-70"> </div>
                <div className="shape-1 absolute left-0 right-0 bottom-0"></div>
            </div>
            <div className="flex z-10 relative flex-col justify-center items-center   h-screen">
                <div className="border bg-white rounded-md p-6 lg:w-4/12  w-10/12 md:w-8/12">
                    <Image alt="" src={'/assets/img-1.png'} height={'100'} width={'100'} className={'mx-auto'} />
                    <p className="font-bold text-center text-lg text-cyan-900 mt-2">Belma</p>
                    <p className="text-center text-sm text-gray-500">Create New Account</p>
                    <form action=""  onSubmit={(e) => { e.preventDefault(); route.push('/dashboard') }} method="post" className="my-10 flex flex-col gap-5">
                        <div >
                            <label htmlFor="" className="font-medium block">Email</label>
                            <input type="text" placeholder="Enter email address" className="block border rounded-md w-full py-3 px-3 text-sm mt-2 focus:border-red-500" />
                        </div>
                        <div >
                            <label htmlFor="" className="font-medium block">Username</label>
                            <input type="text" placeholder="Enter username" className="block border rounded-md w-full py-3 px-3 text-sm mt-2 focus:border-red-500" />
                        </div>
                        <div>
                            <label htmlFor="" className="font-medium block">Password</label>
                            <input type="password" placeholder="Enter password" className="block border rounded-md w-full py-3 px-3 text-sm mt-2" />
                        </div>
                        <p className="italic text-gray-600 text-sm">By registering you agree to the Belma <Link href={'#'} className={'underline text-blue-500'}>Terms of Use</Link></p>
                        <button type="submit" className="bg-green-700 hover:bg-green-600 text-white w-full font-semibold rounded-md p-3">Sign Up</button>
                    </form>
                    <div className="flex items-center">
                        <hr className="bg-gray-500   flex-1  " />
                        <p className="px-4 text-cyan-900">OR</p>
                        <hr className="bg-gray-500   flex-1  " />
                    </div>
                    <p className="text-center my-4">Create account with</p>
                    <div className="flex items-center justify-center gap-4">
                        <button className="bg-blue-800 rounded-sm p-2 flex items-center justify-center  text-white w-10 h-10">
                            <IoLogoFacebook className="text-3xl" />
                        </button>
                        <button className="bg-red-800 rounded-sm p-2 flex items-center justify-center text-white w-10 h-10">
                            <IoLogoGoogle className="text-3xl" />
                        </button>
                        <button className="bg-black rounded-sm p-2 flex items-center justify-center text-white w-10 h-10">
                            <IoLogoGithub className="text-3xl" />
                        </button>
                        <button className="bg-blue-500 rounded-sm p-2 flex items-center justify-center text-white w-10 h-10">
                            <IoLogoTwitter className="text-3xl" />
                        </button>
                    </div>
                </div>
                <p className="my-4">Already have an account ? <Link href={"/login"} className={'underline text-blue-500'}> Login</Link></p>
            </div>
        </>
    )
}

export default Signup;