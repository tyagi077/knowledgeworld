import { Link, NavLink, useNavigate } from "react-router-dom";

export function Card(props){
    const name =props.worldname
        const navigate=useNavigate();

        const handleClick=()=>{
            navigate(`/description/${name}`)
        }
    
    return <div className={`bg-[#141217] border-1 border-[#3b373f] rounded-3xl space-y-1  ${props.padding} `}>
        <div>
        <div className={`bg-amber-100 ${props.display}`}>
            <img className="w-full max-w-100 h-30" src={props.image} alt="" />
            </div>
        </div>
        <div className="text-2xl font-medium mt-4 w-full max-w-34 truncate">
          {props.name?props.name:props.worldname}
        </div>
        <div className="text-sm text-[#79737d] font-medium ">
            <p>{props.capital?"Capital:":"Population:"} <span className="text-white text-[12px]"> {props.capital?props.capital:props.worldpopulation}</span></p>
        </div>
        <div className="text-[#79737d] text-sm font-medium overflow-auto ">
        <p>{props.population?"Population:":"Region:"} <span className="text-white text-[12px]">{props.population?props.population:props.worldregion}</span></p>
        </div>
        <div className="text-[#79737d] text-sm font-medium overflow-auto">
            <p>{props.intrestingFact?"intrestingFact:":"Capital:"} <span className="text-white text-[12px]">{props.intrestingFact?props.intrestingFact:props.worldcapital}</span></p>
        </div>
        <div>
        <span onClick={handleClick} className={`px-2 mt-4 py-1  ${props.display} border-2 bg-[#1F1F1F] text-[#c2b9b9] border-[#7b7a7a] rounded-xl`}>
                <button className="flex">
                    Read More
                </button>
                <div className="w-6 h-6 ml-2 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                </div>
            </span>
        </div>
    </div>
}