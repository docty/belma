import Link from "next/link"
import { IoHome, IoCaretForward, IoPeople, IoArrowUp, IoCart, IoArrowDown, IoPricetag, IoBag } from 'react-icons/io5'
import Layout from "../components/layout"

const Dashboard = () => {

    return (
        <Layout>
            <Content/>
        </Layout>
    )
}


const Content = () => {

    return (
        <>
            <div className="flex justify-between border border-t-0 p-3">
                <p className="uppercase text-gray-900 font-bold px-8">
                    <IoHome className="inline mr-2" />
                    Dashboard
                </p>
                <div className="flex items-center gap-x-2 text-sm">
                    <p className="text-gray-800 font-semibold">Dashboards</p>
                    <IoCaretForward />
                    <p className="text-gray-600">Dashboard</p>
                </div>
            </div>
            <div className="grid grid-cols-4 p-6 mt-12 gap-x-4">
                <div className="border p-3 rounded-md shadow-md">
                    <div className="flex justify-between uppercase ">
                        <p className="text-gray-500">Total Earnings</p>
                        <p className="text-green-600">
                            <IoArrowUp className="inline" />
                            +16.24%
                        </p>
                    </div>
                    <p className="text-slate-900 text-3xl font-bold my-6">$559.25k</p>
                    <div className="flex justify-between">
                        <Link href={'#'} className={'underline text-blue-700 text-sm self-end'}>View net earnings</Link>
                        <div className="bg-green-200 p-4 rounded-md">
                            <IoPricetag className="text-xl" />
                        </div>
                    </div>
                </div>
                <div className="border p-3 rounded-md shadow-md">
                    <div className="flex justify-between uppercase ">
                        <p className="text-gray-500">Orders</p>
                        <p className="text-red-600">
                            <IoArrowDown className="inline" />
                            -3.57%
                        </p>
                    </div>
                    <p className="text-slate-900 text-3xl font-bold my-6">36,894</p>
                    <div className="flex justify-between">
                        <Link href={'#'} className={'underline text-blue-700 text-sm self-end'}>View all orders</Link>
                        <div className="bg-orange-200 p-4 rounded-md">
                            <IoCart className="text-xl" />
                        </div>
                    </div>
                </div>
                <div className="border p-3 rounded-md shadow-md">
                    <div className="flex justify-between uppercase ">
                        <p className="text-gray-500">Customers</p>
                        <p className="text-green-600">
                            <IoArrowUp className="inline" />
                            +29.08%
                        </p>
                    </div>
                    <p className="text-slate-900 text-3xl font-bold my-6">183.35M</p>
                    <div className="flex justify-between">
                        <Link href={'#'} className={'underline text-blue-700 text-sm self-end'}>See details</Link>
                        <div className="bg-sky-200 p-4 rounded-md">
                            <IoPeople className="text-xl" />
                        </div>
                    </div>
                </div>
                <div className="border p-3 rounded-md shadow-md">
                    <div className="flex justify-between uppercase ">
                        <p className="text-gray-500">My Balance</p>
                        <p className="text-green-600">
                            <IoArrowUp className="inline" />
                            +0.50%
                        </p>
                    </div>
                    <p className="text-slate-900 text-3xl font-bold my-6">$165.89k</p>
                    <div className="flex justify-between">
                        <Link href={'#'} className={'underline text-blue-700 text-sm self-end'}>Withdraw money</Link>
                        <div className="bg-violet-200 p-4 rounded-md">
                            <IoBag className="text-xl" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-3 p-6 gap-x-4">
                <div className="bg-white col-span-2 p-3 h-96 shadow-md">
                    <p className="border-b">Revenue</p>
                </div>
                <div className="bg-white shadow-md p-3 ">
                    <p className="border-b">Sales by Locations</p>
                </div>
            </div>
        </>
    )
}
 

export default Dashboard