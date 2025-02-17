import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-1 lg:mt-10">
        <h1 className='text-3xl sm:text-4xl lg:text-6xl text-center tracking-wide'>
            VirtualR Build Tools <span className='bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text'>For Developers</span>
        </h1>
        <p className='text-center mt-10 text-lg text-neutral-500 max-w-4xl'>
        Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!
        </p>

        <div className="flex justify-center mt-10">
            <a href="#" className='bg-gradient-to-r from-orange-500 to-red-500 py-2 px-3 rounded-md mx-3 '>Start for Free</a>
            <a href="#" className='border py-2 px-3 mx-3 rounded-md' >Documentation</a>
        </div>
        <div className="flex justify-center flex-row m-10">
            <video autoplay loop muted className="rounded-lg w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4 ">
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video autoplay loop muted className="rounded-lg w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4 ">
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  )
}

export default HeroSection