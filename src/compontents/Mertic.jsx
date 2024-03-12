import content from '../assets/images/contentimags.png'
export const Mertic = () => {
    return (
        <>
            <div className="min-h-screen flex  flex-col justify-center  lg:flex-row lg:justify-center items-center  lg:px-32 px-5 gap-10 ">
                <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0 " >


                    <h1 className="font-semibold text-5xl text-start lg:text-start  leading-tight" >In-depth metrics</h1>
                    <p className="flex justify-start  text-start" >Accurate, real-time reporting at your fingertips. Getting data has never been easier.</p>
                    <div className=" flex justify-start  ">
                        <button className=" text-blue-800 font-semibold " >Learn More</button>
                    </div>
                </div>
               
                <div className="">

                    <img src={content} alt="" />
                </div>
            </div>
        </>
    )
}