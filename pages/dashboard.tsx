import Link from "next/link"
import { IoHomeOutline, IoCaretForward, IoPeople, IoArrowUp, IoCart, IoArrowDown, IoPricetag, IoBag, IoPricetagOutline, IoCartOutline, IoPeopleOutline, IoBagOutline } from 'react-icons/io5'
import Layout from "../components/layout"
import { Cell, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts'

const Dashboard = () => {

    return (
        <Layout>
            <Content />
        </Layout>
    )
}


const Content = () => {

    const data = [
        {
            name: 'Daily ',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Weekly ',
            uv: 3000,
            pv: 1300,
            amt: 6400,
        },
        {
            name: 'Monthly ',
            uv: 6000,
            pv: 3400,
            amt: 8400,
        }
    ]

    const pieData = [
        {
            name: 'Salary',
            weight: 15,
        },
        {
            name: 'Age',
            weight: 60,
        },
        {
            name: 'Duration',
            weight: 25,
        }
    ]

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
    return (
        <> 
            <div className="flex justify-between border border-t-0 p-3">
                <p className="uppercase text-gray-900 font-bold px-8 items-center flex">
                    <IoHomeOutline className="inline mr-2 text-xl" />
                    Dashboard
                </p>
                <div className="flex items-center gap-x-2 text-sm">
                    <p className="text-gray-800 font-semibold">Dashboards</p>
                    <IoCaretForward />
                    <p className="text-gray-600">Dashboard</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 p-6 mt-12 gap-4">
                <div className="border p-3 rounded-md shadow-sm">
                    <div className="flex justify-between uppercase ">
                        <p className="text-gray-500">Total Earnings</p>
                        <p className="text-green-600">
                            <IoArrowUp className="inline mr-1" />
                            +16.24%
                        </p>
                    </div>
                    <p className="text-slate-900 text-3xl font-bold my-6" >$559.25k</p>
                    <div className="flex justify-between">
                        <Link href={'#'} className={'underline text-blue-700 text-sm self-end'}>View net earnings</Link>
                        <div className="bg-green-200 p-4 rounded-md">
                            <IoPricetagOutline className="text-xl" />
                        </div>
                    </div>
                </div>
                <div className="border p-3 rounded-md shadow-sm">
                    <div className="flex justify-between uppercase ">
                        <p className="text-gray-500">Orders</p>
                        <p className="text-red-600">
                            <IoArrowDown className="inline mr-1" />
                            -3.57%
                        </p>
                    </div>
                    <p className="text-slate-900 text-3xl font-bold my-6"  >36,894</p>
                    <div className="flex justify-between">
                        <Link href={'#'} className={'underline text-blue-700 text-sm self-end'}>View all orders</Link>
                        <div className="bg-orange-200 p-4 rounded-md">
                            <IoCartOutline className="text-xl" />
                        </div>
                    </div>
                </div>
                <div className="border p-3 rounded-md shadow-sm">
                    <div className="flex justify-between uppercase ">
                        <p className="text-gray-500">Customers</p>
                        <p className="text-green-600">
                            <IoArrowUp className="inline mr-1" />
                            +29.08%
                        </p>
                    </div>
                    <p className="text-slate-900 text-3xl font-bold my-6">183.35M</p>
                    <div className="flex justify-between">
                        <Link href={'#'} className={'underline text-blue-700 text-sm self-end'}>See details</Link>
                        <div className="bg-sky-200 p-4 rounded-md">
                            <IoPeopleOutline className="text-xl" />
                        </div>
                    </div>
                </div>
                <div className="border p-3 rounded-md shadow-sm">
                    <div className="flex justify-between uppercase ">
                        <p className="text-gray-500">My Balance</p>
                        <p className="text-green-600">
                            <IoArrowUp className="inline mr-1" />
                            +0.50%
                        </p>
                    </div>
                    <p className="text-slate-900 text-3xl font-bold my-6">$165.89k</p>
                    <div className="flex justify-between">
                        <Link href={'#'} className={'underline text-blue-700 text-sm self-end'}>Withdraw money</Link>
                        <div className="bg-violet-200 p-4 rounded-md">
                            <IoBagOutline className="text-xl" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="grid  lg:grid-cols-3 p-6 gap-6">
                <div className="bg-white col-span-2 p-3 h-96 shadow-md ">
                    <p className="border-b">Sales</p>
                    <LineChart width={300} height={300} className={'max-w-full'} data={data}>
                        <XAxis dataKey={'name'} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type={'monotone'} dataKey={'pv'} stroke={'#8884d8'} />
                        <Line type={'monotone'} dataKey={'uv'} />
                    </LineChart>
                </div>
                <div className="bg-white shadow-md p-3 ">
                    <p className="border-b">Efficiency</p>
                    <PieChart width={300} height={300}    >
                        <Tooltip/>
                        <Pie dataKey={"weight"} data={pieData}  fill={'#8884d8'} label/>
                        {
                            pieData.map((entry, index) => (
                                <Cell fill={COLORS[index % COLORS.length]} key={`cell-${index}`} />
                            ))
                        }
                       
                         
                    </PieChart>
                </div>
            </div>
        </>
    )
}


export default Dashboard