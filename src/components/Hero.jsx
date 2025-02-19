export function Hero() {
    return <div className="gap-8 sm:gap-4 grid grid-cols-1 sm:grid-cols-2 mt-[70px] px-[20px] sm:px-[50px] md:px-[100px] xl:px-[200px]">
        <div className=" flex justify-center ">
            <div className="w-full p-2 ">
            <div className="text-2xl leading-[25px] font-medium w-full max-w-[320px]">Explore the World, One Country at a Time</div>
            <div className="text-sm my-4  text-[#7b7a7a]  lg:w-[400px]">Discover the history,culture and beauty of every nation Start, Search, and filter through countries to find the details you need</div>
            <span className="px-2 py-1 inline-flex border-2 bg-[#1F1F1F] text-[#c2b9b9] border-[#7b7a7a] rounded-xl">
                <button className="hidden sm:flex">
                    Start Exploring
                </button>
                <div className="w-6 h-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                </div>
            </span>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <div className=" max-w-[400px]">
            <img src="https://cdn.pixabay.com/photo/2017/06/14/08/20/map-of-the-world-2401458_1280.jpg" alt=""/>
            </div>
           
        </div>
    </div>
}