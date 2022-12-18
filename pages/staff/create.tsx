import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoCaretForward, IoPeople, IoDocumentOutline, IoInformationOutline } from 'react-icons/io5'
import Layout from "../../components/layout"

const Create = () => {

    return (
        <Layout>
            <Content />
        </Layout>
    )
}


const Content = () => {

    const [saveLoading, setSaveLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const onFormSubmit = async (e: any) => {
        e.preventDefault();

        setSaveLoading(true);

        setTimeout(() => {
            setSaveLoading(false);
            setSuccess(true)
        }, 2000)
    }

    useEffect(() => {
        let timeout: any = null;
        if (success) {
            timeout = setTimeout(() => {
                setSuccess(false)
            }, 2000)
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [success])

    return (
        <>
            <div className="flex justify-between border border-t-0 p-3">
                <p className="uppercase text-gray-900 font-bold px-8">
                    <IoPeople className="inline mr-2" />
                    STAFF
                </p>
                <div className="flex items-center gap-x-2 text-sm px-8">
                    <p className="text-gray-800 font-semibold">Dashboards</p>
                    <IoCaretForward />
                    <p className="text-gray-600">Create Staff</p>
                </div>
            </div>

            <div className=" p-6">
                <div className="bg-white p-3  shadow-md">
                    <div className='flex justify-between   items-center'>
                        <p className="">Staff Create</p>
                        <Link href={'/staff/view'} className='bg-amber-700 hover:bg-amber-600 p-3 rounded-md text-white'>
                            <IoDocumentOutline className='inline text-white mx-1 text-xl font-bold' />
                            View Staff</Link>
                    </div>

                    <form onSubmit={onFormSubmit} action="#" className='flex flex-col lg:grid lg:grid-cols-3 gap-6 '>
                        <div className='w-full'>
                            <label htmlFor="" className='block font-medium'>First Name</label>
                            <input type="text" placeholder='Enter First Name' className='border rounded-md block p-3 w-full' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="" className='block font-medium'>Middle Name (Optional)</label>
                            <input type="text" placeholder='Enter Middle Name' className='border rounded-md block p-3 w-full' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="" className='block font-medium'>Last Name</label>
                            <input type="text" placeholder='Enter Last Name' className='border rounded-md block p-3 w-full' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="" className='block font-medium'>Phone Number</label>
                            <input type="text" placeholder='Enter Phone Number' className='border rounded-md block p-3 w-full' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="" className='block font-medium'>Salary Target</label>
                            <input type="text" placeholder='Enter Salary Target ' className='border rounded-md block p-3 w-full' />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="" className='block font-medium'>House Address </label>
                            <input type="text" placeholder='Enter House Address' className='border rounded-md block p-3 w-full' />
                        </div>
                        {
                            success && (
                                <div className='bg-emerald-900 col-span-2 p-3 rounded-md flex items-center gap-x-4'>
                                    <IoInformationOutline className='text-white float-left text-xl font-bold bg-gray-800 rounded-full w-8 h-8 p-1' />
                                    <p className='text-white   '>Saved Succesfully </p>
                                </div>
                            )
                        }

                        <button disabled={saveLoading} type='submit' className='col-start-3 bg-cyan-700 hover:bg-cyan-600 p-3 align-middle text-white rounded-md'>
                            {
                                saveLoading
                                    ?
                                    <span className='h-4 w-4 inline-block border-2 border-l-transparent rounded-full animate-spin'></span>
                                    :
                                    <span>Save Now</span>
                            }
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}


export default Create