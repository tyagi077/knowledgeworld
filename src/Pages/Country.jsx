import { useEffect, useRef, useState, useTransition } from "react";
import { Card } from "../components/Card";
import axios from "axios";
import { getCountryData } from "../api/PostApi";

export function Country() {

    const [isPending, startTransition] = useTransition()
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState("");
    const [filter, setFiter] = useState("all");

    useEffect(() => {
        const fetchData = async () => {
            const res = await getCountryData()
            startTransition(() => {
                setCountries(res.data);
            })
        }
        fetchData()
    }, []);

    

    if (isPending) {
        return <h1>Loading....</h1>
    }

    
    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }


    const handleSelect = (e) => {
        setFiter(e.target.value)
    }
   
   
        

    const filterRegion=(country)=>{
        if(filter==="all") return country;
        return country.region===filter
    }

    const searchCountry=(country)=>{
        if(search){
           return  country.name.common.toLowerCase().includes(search.toLowerCase());
        }else{
            return country;
        }
    }
    const filterCountries = countries.filter(
        (country)=> searchCountry(country) && 
        filterRegion(country)
    );

    const sortCountries=(value)=>{
       const sortCountries =[...countries].sort((a,b)=>{
         return value==="asc"?a.name.common.localeCompare(b.name.common):b.name.common.localeCompare(a.name.common)
       });
       setCountries(sortCountries)
    }
    




    return (
        <div className="px-[20px] sm:px-[50px] md:px-[100px] xl:px-[200px] py-5 mt-10 mb-20">

            <div className="grid grid-col-1 gap-4 small:grid-cols-2 md:grid-cols-4  px-2">
                <div>
                    <input onChange={handleChange} value={search} className="w-full max-w-50 outline-none rounded-lg border border-gray-700 focus:border-blue-400 py-1 px-3 " type="text" placeholder="Search" />
                </div>
                <div onClick={()=>sortCountries("asc")} className="max-w-20 border border-gray-700  px-6 rounded-2xl py-1">
                    <button >Asc</button>
                </div>
                <div onClick={()=>sortCountries("desc")} className="border max-w-20 border-gray-700 px-6 rounded-2xl py-1">
                    <button>Desc</button>
                </div>
                <div className="relative rounded-lg max-w-50 border border-gray-700 px-2 py-1 ">
                    <select value={filter} onChange={handleSelect} name="" id="" className="bg-black w-full focus:outline-none">
                        <option value="all">All</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">

                {filterCountries.map((country, index) => {
                    return <Card
                        key={index}
                        image={country ? country.flags.png : null}
                        worldname={country ? country.name.common : null}
                        padding={"p-8"}
                        display={"inline-flex max-w-[250px]"}
                        worldcapital={country ? country.capital : null}
                        worldpopulation={country ? country.population : null}
                        worldregion={country ? country.region : "null"}
                    />

                })}


            </div>


        </div>
    )
}