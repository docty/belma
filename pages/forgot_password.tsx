import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoLogoFacebook, IoLogoGithub, IoLogoTwitter, IoLogoGoogle } from 'react-icons/io5'
const ForgotPassword = () => {
    const route = useRouter();
    return (
        <>
            <Head>
                <title>Forgot Password</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-image absolute inset-0">
                <div className="bg-black h-full opacity-80"> d</div>
                <div className="shape-1 absolute left-0 right-0 bottom-0">d</div>
            </div>
            <div className="flex z-10 relative flex-col justify-center items-center   h-screen">
                <div className="border bg-white rounded-md p-6 lg:w-4/12  w-10/12 md:w-8/12">
                    <p className="font-bold text-center text-lg text-cyan-800">Forgot Password</p>
                    <p className="text-center text-sm text-gray-500">Reset password with Belma</p>
                    <form action="" onSubmit={(e) => { e.preventDefault(); route.push('/dashboard') }} method="post" className="my-10 flex flex-col gap-5">
                        <div >
                            <label htmlFor="" className="font-semibold block">Email</label>
                            <input type="text" placeholder="Enter Email Address" className="block border rounded-sm w-full py-2 px-3 text-sm mt-2 focus:border-red-500" />
                        </div>
                        
                        <button type="submit" className="bg-green-700 text-white w-full font-semibold rounded-sm p-2">Send Reset Link</button>
                    </form>
                     
                </div>
                <p className="my-4">Wait, I remember my password... <Link href={"/login"} className={'underline text-blue-500'}> Login</Link></p>
            </div>
        </>
    )
}

export default ForgotPassword;