import pose from "../assets/images/pose.png"
export const Hero = () => {
    return (
        <>

            <div className="min-h-screen flex  flex-col justify-center  lg:flex-row lg:justify-center items-center  lg:px-32 px-5 gap-10 ">
                <div  className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0  ">
                    <h1 className="font-semibold text-5xl text-start lg:text-start  leading-tight "  >Grow your
                        subscription
                        business</h1>


                    <p  className="flex justify-start  text-start  " >Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.</p>
                    <div className=" flex justify-start  ">
                        <button className="   border-0  rounded-md bg-blue-700 text-white  h-10  w-40" >Get Stated</button>
                    </div>
                </div>

                <div>
                    <img src={pose} alt="" />
                </div>
            </div>

        </>
    )
}