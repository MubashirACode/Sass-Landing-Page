import counter from '../assets/images/contenr.png'
export const Suscription = () => {
    return (
        <>

<div className="min-h-screen flex  flex-col justify-center  lg:flex-row lg:justify-center items-center  lg:px-32 px-5 gap-10 ">
            <div>
                <img src={counter} alt="" />
            </div>

           
                <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0  ">
                    <h1 className="font-semibold text-5xl text-start lg:text-start  leading-tight "  >Grow your
                    Subscription index</h1>


                    <p className='text-start'>A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.</p>
                    <div className="flex justify-start">
                        <button className="    border-0  rounded-md bg-blue-700 text-white  h-10  w-40" >Get Stated</button>
                    </div>
                </div>
            </div>

        </>
    )
}