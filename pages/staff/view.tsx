import Link from 'next/link'
import { useState } from 'react'
import { IoCaretForward, IoPeople, IoPencilOutline, IoTrashOutline, IoSaveOutline, IoAddOutline } from 'react-icons/io5'
import Layout from "../../components/layout"

const View = () => {

    return (
        <Layout>
            <Content />
        </Layout>
    )
}


const Content = () => {

    const tableData: ITableData[] = [
        {
            sn: '1',
            fullName: 'Henry Kwasi Asiedu',
            email: 'developer@belma.com'
        },
        {
            sn: '2',
            fullName: '	Emmanuella Asamoah',
            email: 'manager@belma.com'
        }
    ]

    return (
        <>
            <div className="flex justify-between border border-t-0 p-3">
                <p className="uppercase text-gray-900 font-bold px-8">
                    <IoPeople className="inline mr-2" />
                    STAFF
                </p>
                <div className="flex items-center gap-x-2 text-sm px-8" >
                    <p className="text-gray-800 font-semibold">Dashboards</p>
                    <IoCaretForward />
                    <p className="text-gray-600">View Staff</p>
                </div>
            </div>

            <div className=" p-6">
                <div className="bg-white col-span-2 p-3 h-96 shadow-md">
                    <div className='flex justify-between   items-center'>
                        <p className="">Staff List</p>
                        <Link href={'/staff/create'} className='bg-amber-700 hover:bg-amber-600 p-3 rounded-md text-white'>
                            <IoAddOutline className='inline text-white mx-1 text-xl font-bold' />
                            Add Staff</Link>
                    </div>

                    <table className="mt-8 w-full max-w-full overflow-scroll">
                        <thead className="overflow-scroll">
                            <tr className="border  cursor-pointer text-left overflow-scroll">
                                <th className="p-3">SN</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="overflow-scroll">
                            {
                                tableData.map((item) => (
                                    <TableItem key={item.sn} {...item} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}


const TableItem = (item: ITableData) => {
    const [onEdit, setOnEdit] = useState<boolean>(false);

    return (
        <tr key={item.sn} className={`cursor-pointer border-b hover:bg-gray-200 overflow-scroll `}>
            <td className="p-3">{item.sn}</td>
            <td contentEditable={onEdit} className={`${onEdit && 'border-2 border-gray-900 bg-white'}`}>{item.fullName}</td>
            <td contentEditable={onEdit} className={`${onEdit && 'border-2 border-gray-900 bg-white'}`}>{item.email}</td>
            <td>
                {
                    onEdit ?
                        <>
                            <button className="mx-1 bg-green-900 rounded-md p-2 hover:bg-green-700" onClick={() => setOnEdit(false)}>
                                <IoSaveOutline className='text-xl text-green-100 ' />
                            </button>
                            <button className="mx-1 bg-red-900 rounded-md p-2" >
                                <IoTrashOutline className='text-xl text-red-100 font-bold' />
                            </button>
                        </>
                        :
                        <button className="mx-1 bg-blue-900 hover:bg-blue-700 rounded-md p-2" onClick={() => setOnEdit(true)}>
                            <IoPencilOutline className='text-xl text-blue-100 ' />
                        </button>
                }


            </td>
        </tr>
    )
}

interface ITableData {
    sn: string
    fullName: string
    email: string
}

export default View