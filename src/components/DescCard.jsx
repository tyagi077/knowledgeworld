import { useNavigate } from "react-router-dom"

export function DescCard(){
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate(`/country`)
        
    }
    return <div className="relative px-[20px] mt-10 mb-10  sm:px-[50px] md:px-[100px] xl:px-[200px]">
        <div className="grid grid-cols-2">
            <div className="flex justify-center items-center" >
                <img className=" w-full max-w-50" src="https://imgs.search.brave.com/IKNvbgsHyOWRYIuEAOiO_Qfjc8IQvXjvk6VSSiTe5yQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzExLzA1LzQyLzA3/LzM2MF9GXzExMDU0/MjA3MDlfTGlEWjdn/dTZmdDhMRkJuZVcx/a0pRc2oyQ3RDOWlk/WmwuanBn" alt="" />
            </div>
            <div className=" w-full flex flex-col space-y-5 pl-10 mb-15">
                <div className="text-xl font-medium">
                    <span>Republic of India</span>
                </div>
                <div className="text-sm text-[#666461]">
                    <span>Native Names: <span className="text-white">India.,,,</span></span>
                </div>
                <div className="text-sm text-[#666461]">
                <span>Population: <span className="text-white">1,380.004.385</span></span>
                </div>
                <div className="text-sm text-[#666461]">
                <span>Region: <span className="text-white">Asia</span></span>
                </div>
                <div className="text-sm text-[#666461]">
                <span>Sub Region: <span className="text-white">Southern Asia</span></span>
                </div>
                <div className="text-sm text-[#666461]">
                <span>Capital: <span className="text-white">New Delhi</span></span>
                </div>
                <div className="text-sm text-[#666461]">
                <span>Top Level Domain: <span className="text-white">in</span></span>
                </div>
                <div className="text-sm text-[#666461]">
                <span>Currenices: <span className="text-white">Indian rupee</span></span>
                </div>
                <div className="text-sm text-[#666461]">
                <span>Languages: <span className="text-white">English, Hindi, Tamil</span></span>
                </div>
            </div>
        </div>
        <div className="border-1 border-white px-6 py-1 rounded-xl font-medium inline-flex absolute right-8 bottom-0 bg-[#1F1F1F]">
            <button onClick={handleClick}>Go back</button>
        </div>
    </div>
}