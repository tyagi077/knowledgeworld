import { useEffect, useState, useTransition } from "react";
import { useNavigate } from "react-router-dom"
import { getCountryDataByName } from "../api/PostApi";

export const DescCard = ({ name }) => {

  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCountryDataByName(name);
      startTransition(() => {
        setCountries(res.data);

      });
    };

    fetchData();
  }, []);
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/country`)

  }
  if (isPending) {
    return <h1>Loading....</h1>;
  }else{
  return (<div>
    {countries&&<div className="relative px-[20px] mt-10 mb-10  sm:px-[50px] md:px-[100px] xl:px-[200px]">
    <div className="grid grid-cols-2">
      <div className="flex justify-center items-center" >

        <img className=" w-full max-w-50" src={countries.length > 0 ? countries[0].flags.png : null} alt="" />
      </div>
      <div className=" w-full flex flex-col space-y-5 pl-10 mb-15">
        <div className="text-xl font-medium">
          <span>{countries.length > 0 ? countries[0].name.official : null}</span>
        </div>
        <div className="text-sm text-[#666461]">
          <span>Native Names: <span className="text-white">{countries.length > 0 ? Object.keys(countries[0].name.nativeName).map((key) => countries[0].name.nativeName[key].common).join(",") : "ss"}</span></span>
        </div>
        <div className="text-sm text-[#666461]">
          <span>Population: <span className="text-white">{countries.length > 0 ? countries[0].population : null}</span></span>
        </div>
        <div className="text-sm text-[#666461]">

          <span>Region: <span className="text-white">{countries.length > 0 ? countries[0].region : null}</span></span>
        </div>
        <div className="text-sm text-[#666461]">
          <span>Sub Region: <span className="text-white">{countries.length > 0 ? countries[0].subregion : null}</span></span>
        </div>
        <div className="text-sm text-[#666461]">
          <span>Capital: <span className="text-white">{countries.length > 0 ? countries[0].capital : null}</span></span>
        </div>
        <div className="text-sm text-[#666461]">
          <span>Top Level Domain: <span className="text-white">{countries.length > 0 ? countries[0].tld.map((val) => val).join("  ") : "ss"}</span></span>
        </div>
        <div className="text-sm text-[#666461]">
          <span>Currenices: <span className="text-white"> {countries.length > 0 ? Object.keys(countries[0].currencies).map((key) => countries[0].currencies[key].name) : "ss"}
          </span></span>

        </div>
        <div className="text-sm text-[#666461]">
          <span>Languages: <span className="text-white">  {countries.length > 0 ? Object.keys(countries[0].name.nativeName).map((key) => countries[0].name.nativeName[key].common).join(",") : "ss"}</span></span>
        </div>
      </div>
    </div>
    <div className="border-1 border-white px-6 py-1 rounded-xl font-medium inline-flex absolute right-8 bottom-0 bg-[#1F1F1F]">
      <button onClick={handleClick}>Go back</button>
    </div>
  </div>
  }</div>)
}
}

const serachByName=(name)=>{
  
}