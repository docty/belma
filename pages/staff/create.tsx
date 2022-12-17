import { IoHome, IoCaretForward, IoPencil, IoTrash, IoPeople } from 'react-icons/io5'
import Layout from "../../components/layout"

const Create = () => {

    return (
        <Layout>
            <Content />
        </Layout>
    )
}


const Content = () => {

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
                <div className="bg-white p-3 h-96 shadow-md">
                    <p className="border-b mb-4 font-bold">Staff Create</p>
                    <form action="#" className='flex flex-col lg:grid lg:grid-cols-3 gap-6 '>
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
                        <button className='col-start-3 bg-green-700 hover:bg-green-600 p-3 text-white rounded-md'>Save Now</button>
                    </form>
                </div>

            </div>
        </>
    )
}


export default Create