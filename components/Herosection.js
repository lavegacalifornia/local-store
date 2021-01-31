import SocialMedia from '../components/SocialMedia'

export default function HeroSection({ resName, resDescription, resAdress, time}) {
    return (
        <div className="">
            <img src="../png/example-unsplash.jpg" alt="image of the restaurant" className="h-30 w-full object-contain" />
            <div className="flex flex-wrap sm:mx-16">
                <img src="../png/logo.jpg" alt="restaurant's logo" className="w-24 h-24 sm:w-40 sm:h-40 rounded-full border-2 border-white relative bottom-6 left-4 " />
                <div className="order-3 mx-3 mb-3 sm:ml-12  sm:mt-4">
                    <h1 className="text-2xl">{resName}</h1>
                    <p className="text-gray-500 my-3">{resDescription}</p>
                    <div className="flex flex-row">
                        <img src="../svg/placeholder.svg" alt="location icon" className="w-4" />
                        <p className="text-green-500 ml-2">{resAdress}</p>
                    </div>
                </div>
                <div className="sm:order-3 w-44 h-16 sm:h-10 self-center ml-8 sm:ml-10">
                    <SocialMedia source={"#"}/>
                </div>
            </div>
            <div className="flex mb-4 ">
                <p className="bg-blue-300 w-full text-white self-center text-center py-2">{time}</p>
            </div>
        </div>
    )
}
