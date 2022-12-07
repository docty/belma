import Image from "next/image"
import Link from "next/link"
import { Children, useRef, useState } from "react"
import { IoHome, IoCaretForward, IoCaretDown, IoAdd, IoAccessibility, IoApps, IoNotifications, IoPeople, IoLogOut, IoArrowUp, IoCart, IoArrowDown, IoPricetag, IoBag, IoPencil, IoTrash } from 'react-icons/io5'
import Layout from "../../components/layout"

const View = () => {

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
                    <IoHome className="inline mr-2" />
                    STAFF
                </p>
                <div className="flex items-center gap-x-2 text-sm px-8" >
                    <p className="text-gray-800 font-semibold">Dashboards</p>
                    <IoCaretForward />
                    <p className="text-gray-600">List Staff</p>
                </div>
            </div>

            <div className=" p-6">
                <div className="bg-white col-span-2 p-3 h-96 shadow-md">
                    <p className="border-b">Staff List</p>
                    <table className=" mt-8 w-full">
                        <thead >
                            <tr className="border  cursor-pointer text-left">
                                <th className="p-3">SN</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="cursor-pointer border-b hover:bg-gray-200">
                                <td className="p-3">1</td>
                                <td>Henry Kwasi Asiedu</td>
                                <td>developer@belma.com</td>
                                <td>+233000000000</td>
                                <td>Active</td>
                                <td>
                                    <button className="mx-3">
                                        <IoPencil />
                                    </button>
                                    <button>
                                        <IoTrash className="text-red-500" />
                                    </button>
                                </td>
                            </tr>
                            <tr className="cursor-pointer border-b hover:bg-gray-200">
                                <td className="p-3">2</td>
                                <td>Emmanuella Asamoah</td>
                                <td>manager@belma.com</td>
                                <td>+233000000001</td>
                                <td>Active</td>
                                <td>
                                    <button className="mx-3">
                                        <IoPencil />
                                    </button>
                                    <button>
                                        <IoTrash className="text-red-500" />
                                    </button>
                                </td>
                            </tr>
                            <tr className="cursor-pointer border-b hover:bg-gray-200">
                                <td className="p-3">3</td>
                                <td>Elsie Aikins</td>
                                <td>officer@belma.com</td>
                                <td>+233000000002</td>
                                <td>Active</td>
                                <td>
                                    <button className="mx-3">
                                        <IoPencil />
                                    </button>
                                    <button>
                                        <IoTrash className="text-red-500" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}


export default View