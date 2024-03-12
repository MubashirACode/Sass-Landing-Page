import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
import { useState } from "react";
import menu from "../assets/images/list.png"

export const Header = () => {
    const [dropdown, setDropdown] = useState(false);



    return (
        <>
            <header className="flex justify-between items-center   px-5 py-4 ">
                <span>


                    <img src={logo} alt="" className="w-38 sm:w-40" />

                </span>



                <nav className=" hidden sm:inline-flex gap-x-4  text-gray-900 text-xl font-small  ">

                    <span className="">
                        <Link to='/' className="mx-5  text-black ">Feature</Link>

                    </span>
                    <span className="   ">
                        <Link to='/pricing' className="mx-5  text-black">Pricing</Link>
                    </span>

                    <span className="   ">
                        <Link to='/blog' className="mx-5  text-black">Blog</Link>
                    </span>

                   
                </nav>
<div  className=" hidden sm:inline-flex" >
<button className="text-xl    border-0  rounded-md bg-orange-500 text-white  h-10  w-40">Get Startded</button>
</div>
                <span


                    onClick={() => setDropdown(!dropdown)}
                    className="  text-3xl inline-block sm:hidden"

                >
                    {dropdown ?(
                        <span className="">
                            <i class="ri-close-line"></i>
                        </span>
                    ):(
<i className=" text-3xl font-semibold ri-menu-3-line"></i>
                    )}
                   
                </span>
            </header>


            <div className={`transition-all duration-500 ${dropdown ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 bg-blue-300 w-64 z-50`}>
  <nav className="flex flex-col gap-2 text-gray-900 text-lg font-medium p-4">
    <span className="hover:text-blue-700 hover:underline">
      <Link to="/" className="text-black">Feature</Link>
    </span>
    <span className="hover:text-blue-700 hover:underline">
      <Link to="/pricing" className="text-black">Pricing</Link>
    </span>
    <span className="hover:text-blue-700 hover:underline">
      <Link to="/blog" className="text-black">Blog</Link>
    </span>
    <button className="bg-orange-500 hover:bg-orange-700 text-white rounded-md py-2 px-4 hover:bg-gray-900 transition duration-300 ease-in-out">Get Started</button>
  </nav>
</div>





        </>


    )
}