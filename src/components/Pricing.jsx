import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"

const Pricing = () => {
  return (
    <div className="mt-20 ">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
            Pricing
        </h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((option, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <div className="p-10 border border-neutral-700 rounded-xl">
                        <p className="text-4xl mb-8 ">
                            {option.title}
                            {option.title === "Pro" && 
                                <span className="bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>}
                        </p>
                        <p className="mb-8">
                            <span className="text-5xl mr-2 mt-6">{option.price}</span>
                            <span className="text-neutral-400 tracking-tight">/Month</span>
                        </p>
                        <ul>
                            {option.features.map((feature, index) => (
                                <li key={index} className="flex items-center mt-8">
                                    <CheckCircle2/>
                                    <span className="ml-2">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="border border-orange-500 px-5 tracking-tight text-xl mt-20 hover:bg-orange-500 rounded-lg transition duration-200 inline-flex justify-center text-center items-center w-full h-12 ">Subscribe</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing