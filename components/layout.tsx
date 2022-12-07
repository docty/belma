import Link from "next/link"
import { Children, useRef, useState } from "react"
import { IoApps, IoHome, IoCaretForward, IoCaretDown, IoAdd, IoNotifications, IoPeople, IoLogOut } from "react-icons/io5"
import Image from 'next/image';
import { useRouter } from "next/router";

const Layout = ({ children }: any) => {


    return (
        <div>
            <Sidebar />
            <div className="ml-half ">
                <Navbar />
                {children}
            </div>

        </div>
    )
}


const Navbar = () => {

    const staffRef = useRef<HTMLDivElement>(null)
    const [caret, setCaret] = useState<boolean>(true);

    const onItemClick = () => {
        if (staffRef.current?.classList.contains('h-0')) {
            staffRef.current?.classList.replace('h-0', 'min-h-fit')
        } else {
            staffRef.current?.classList.replace('min-h-fit', 'h-0')
        }

        setCaret(p => !p);
    }
    return (
        <nav className="border flex p-4 px-8 justify-between">
            <input type="search" name="" id="" placeholder="Search" className="p-2 rounded-sm bg-gray-200" />
            <div className="flex items-center justify-center gap-x-6">
                <button className=" h-full relative hover:bg-slate-200 p-2   rounded-md">
                    <p className="bg-red-600 rounded-full text-white text-xs font-bold text-center absolute p-1 -right-1 -top-2">10</p>
                    <IoNotifications className="block h-full text-lg w-6" />
                </button>
                <div className="relative">
                    <button className="flex items-center gap-2" onClick={onItemClick}>
                        <Image src={'/assets/avatar-10.jpg'} alt={'Avatar'} className={'rounded-full'} height={40} width={40} />
                        <div className="text-sm">
                            <p className="font-bold">Emmanuella Asamoah</p>
                            <p className="text-gray-600 text-left">Frontend Developer</p>
                        </div>

                    </button>
                    <div ref={staffRef} className=" absolute w-full bg-white mt-3 z-10 shadow-md h-0 overflow-y-clip">
                        <button className="text-gray-600 hover:bg-slate-100 block w-full text-left p-2">
                            <IoPeople className="inline w-12 text-lg" />
                            <span className="text-sm">Profile</span>
                        </button>
                        <hr className="my-2" />
                        <button className="text-gray-600 hover:bg-slate-100 block w-full text-left p-2">
                            <IoLogOut className="inline w-12 text-lg" />
                            <Link href={'/logout'} className="text-sm">Logout</Link>
                        </button>
                    </div>
                </div>

            </div>

        </nav>
    )
}

const Sidebar = () => {
    const { pathname } = useRouter();

    const account: IAccount[] = [
        {
            title: 'Staff',
            icon: <IoApps className="inline-block text-xl w-12" />,
            children: [
                {
                    title: 'View Staff',
                    href: '/staff/view'
                },
                {
                    title: 'Create Staff',
                    href: '/staff/create'
                }
            ]
        }
    ]
    return (
        <aside className="bg-slate-900 h-screen w-2/12 fixed p-3">
            <Image src={"/assets/logo-light.png"} alt={"Logo"} width={120} height={120} className={'mx-auto my-6'} />

            <div className="p-4">
                <Link className={` text-gray-400 h-12 uppercase text-sm flex items-center  ${pathname === '/dashboard' && 'active-tab'} hover:bg-slate-700 rounded-md `} href={'/dashboard'} >
                    <IoHome className="inline-block text-xl w-12" />
                    <span className="text-xs">Dashboard</span>
                </Link>

                <p className="uppercase  text-gray-500 text-xs font-semibold mt-8 mb-4"> Account</p>

                {
                    Children.toArray(account.map((value) => <MenuItem item={value} pathname={pathname} />))
                }

            </div>
        </aside>
    )
}

const MenuItem = ({ item, pathname }: IMenuItem) => {

    const parentPath = pathname.split('/')[1];
    const childPath = item.children[0].href.split('/')[1];

    const staffRef = useRef<HTMLDivElement>(null)
    const [caret, setCaret] = useState<boolean>(true);

    const onItemClick = () => {
        if (staffRef.current?.classList.contains('h-0')) {
            staffRef.current?.classList.replace('h-0', 'min-h-fit')
        } else {
            staffRef.current?.classList.replace('min-h-fit', 'h-0')
        }

        setCaret(p => !p);
    }

    return (
        <div onClick={onItemClick} className={' rounded-md text-gray-400 '}>
            <Link className={`hover:bg-slate-700 ${parentPath === childPath && 'active-tab'} rounded-md h-12 uppercase text-sm flex items-center p-0`} href={'#'} >
                {item.icon}
                <span className="text-xs">{item.title}</span>
                {
                    caret ?
                        <IoCaretForward className="inline-block text-xl w-8 ml-auto" />
                        :
                        <IoCaretDown className="inline-block text-xl w-8 ml-auto" />
                }

            </Link>
            <div ref={staffRef} className=" text-sm rounded-md  grid gap-0 h-0 overflow-y-clip transition-height">
                {
                    Children.toArray(item.children.map(child => (
                        <Link href={child.href} className={'p-4 px-8  block hover:bg-slate-800 '}>
                            <IoAdd className="inline text-lg font-semibold w-12" />
                            {child.title}
                        </Link>
                    )))
                }
            </div>
        </div>
    )
}

interface IMenuItem {
    item: IAccount
    pathname: string
}

interface IAccount {
    title: string;
    icon: any;
    children: {
        title: string;
        href: string;
    }[];
}


export default Layout;