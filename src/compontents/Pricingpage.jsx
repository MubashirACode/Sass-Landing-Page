import {Link} from "react-router-dom"
export const Pricingpage = () => {
    return (
        <>
           <section>
    <div className="container mx-auto px-4 lg:px-8 text-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="shadow-lg rounded-lg py-12 px-8 text-center bg-gray-200">
                <span className="mb-3 inline-block font-semibold tracking-widest text-lg">Starter</span>
                <h3 className="text-4xl md:text-4xl font-bold mb-6 text-black">Free</h3>
                <ul>
                    <li className="text-base md:text-lg mb-3 pb-3 text-gray">1 Website</li>
                    <li className="text-base md:text-lg mb-3 pb-3 text-gray">5 GB Hosting</li>
                    <li className="text-base md:text-lg mb-3 pb-3 text-gray">Limited Support</li>
                </ul>
                <Link to={'/'} className="inline-block bg-white text-blue-600 font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg mt-5">Get Started</Link>
            </div>

            <div className="shadow-lg rounded-lg py-12 px-8 text-center bg-[#FF7143] hover:bg-orange-600">
                <span className="mb-3 inline-block font-semibold tracking-widest text-lg">Premium</span>
                <h3 className="text-4xl md:text-4xll font-bold mb-6 text-black">$29/month</h3>
                <ul>
                    <li className="text-base md:text-lg mb-3 pb-3 text-gray">10 Website</li>
                    <li className="text-base md:text-lg mb-3 pb-3 text-gray">15 GB Hosting</li>
                    <li className="text-base md:text-lg mb-3 pb-3 text-gray">Premium Support</li>
                </ul>
                <Link to={'/'} className="inline-block bg-[#9F3919] text-white hover:bg-orange-500 font-bold py-2 md:py-3 px-6 md:px-12 rounded-lg mt-5">Get Started</Link>
            </div>

            <div className="shadow-lg rounded-lg py-12 px-8 text-center bg-gray-200">
                <span className="mb-3 inline-block font-semibold tracking-widest text-lg">Enterprise</span>
                <h3 className="text-4xl md:text-4xl font-bold mb-6 text-black">$49/month</h3>
                <ul>
                    <li className="text-base md:text-lg mb-3 pb-3 text-gray">Unlimited Website</li>
                    <li className="text-base md:text-lg mb-3 pb-3 text-gray">50 GB Hosting</li>
                    <li className="text-base md:text-lg mb-3 pb-3 text-gray">Premium Support</li>
                </ul>
                <Link to={'/'} className="inline-block bg-white text-blue-600 font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg mt-5">Get Started</Link>
            </div>
        </div>
    </div>
</section>


        </>
    )
}