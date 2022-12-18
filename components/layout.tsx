import Link from "next/link"
import { Children, useRef, useState } from "react"
import { IoApps, IoHomeOutline, IoCaretForward, IoCaretDown, IoMenu, IoAdd, IoNotificationsOutline, IoPeopleOutline, IoLogOutOutline, IoArrowBack } from "react-icons/io5"
import Image from 'next/image';
import { useRouter } from "next/router";
import Head from "next/head";

const Layout = ({ children }: any) => {
    const [sidebar, setSidebar] = useState<boolean>(false);

    return (
        <>
            <Head>
                <title>Belma</title>
                <meta name="description" content="Belma admin page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Sidebar display={sidebar} onDisplay={(args: boolean) => setSidebar(args)} />
                <div className="lg:ml-half ">
                    <Navbar onDisplay={(args: boolean) => setSidebar(args)} />
                    {children}
                </div>

            </div>
        </>

    )
}

const Sidebar = ({ display, onDisplay }: ISidebar) => {
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
    ];
    return (
        <aside className={`bg-slate-900 h-screen z-10 fixed w-10/12 ${display || 'hidden'} lg:w-2/12 lg:block  `}>
            <div className="lg:sr-only flex justify-between px-6 pt-3">
                <Image src={"/assets/img-1.png"} alt={"Logo"} width={120} height={120} className={' my-6'} />
                <button className="hover:bg-gray-700 rounded-md" onClick={() => onDisplay(false)}>
                    <IoArrowBack className="w-12 text-3xl text-white " />
                </button>
            </div>
            <Image src={"/assets/img-1.png"} alt={"Logo"} width={80} height={80} className={'mx-auto mt-4 mb-2 hidden lg:block'} />
            <p className="text-center text-white text-xl font-bold ">BELMA</p>

            <div className="p-5 mt-4">
                <Link className={` text-gray-400 h-12 uppercase text-sm flex items-center  ${pathname === '/dashboard' && 'active-tab'} hover:bg-slate-700 rounded-md `} href={'/dashboard'} >
                    <IoHomeOutline className="inline-block text-xl w-12" />
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

const Navbar = ({ onDisplay }: INavbar) => {

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
        <nav className="border flex p-4 px-8 justify-between ">
            <input placeholder="Search" className="sr-only lg:not-sr-only  px-12 rounded-md bg-gray-50 border" />
            <button className="p-1 bg-gray-100 rounded-md lg:hidden" onClick={() => onDisplay(true)}>
                <IoMenu className="w-12 text-3xl" />
            </button>
            <div className="flex items-center justify-center gap-x-6">
                <button className=" h-full relative hover:bg-slate-200 p-2   rounded-md">
                    <p className="bg-red-600 rounded-full text-white text-xs font-bold text-center absolute p-1 -right-1 -top-2">10</p>
                    <IoNotificationsOutline className="block h-full text-lg w-6" />
                </button>
                <div className="relative">
                    <button className="flex items-center gap-2" onClick={onItemClick}>
                        <Image src={'/assets/avatar-10.jpg'} alt={'Avatar'} className={'rounded-full'} height={40} width={40} />
                        <div className="text-sm">
                            <p className="font-bold">Emmanuella</p>
                            <p className="text-gray-600 text-left">Frontend</p>
                        </div>

                    </button>
                    <div ref={staffRef} className=" absolute w-full bg-white mt-3 z-10 shadow-md h-0 overflow-y-clip">
                        <button className="text-gray-600 hover:bg-slate-100 block w-full text-left p-2">
                            <IoPeopleOutline className="inline w-12 text-lg" />
                            <span className="text-sm">Profile</span>
                        </button>
                        <hr className="my-2" />
                        <button className="text-gray-600 hover:bg-slate-100 block w-full text-left p-2">
                            <IoLogOutOutline className="inline w-12 text-lg" />
                            <Link href={'/logout'} className="text-sm">Logout</Link>
                        </button>
                    </div>
                </div>

            </div>

        </nav>
    )
}



const MenuItem = ({ item, pathname }: IMenuItem) => {

    const parentPath = pathname.split('/')[1];
    const childPath = item.children[0].href.split('/')[1];

    const menuRef = useRef<HTMLDivElement>(null)
    const [caret, setCaret] = useState<boolean>(parentPath === childPath ? false : true);

    const onItemClick = () => {
        if (menuRef.current?.classList.contains('h-0')) {
            menuRef.current?.classList.replace('h-0', 'min-h-fit')
        } else {
            menuRef.current?.classList.replace('min-h-fit', 'h-0')
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
            <div ref={menuRef} className={`text-sm rounded-md  grid gap-0 ${parentPath === childPath ? 'min-h-fit' : 'h-0'}  overflow-y-clip transition-height`}>
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


interface ISidebar extends INavbar {
    display: boolean;
}

interface INavbar {
    onDisplay: (args: boolean) => void;
}
export default Layout;