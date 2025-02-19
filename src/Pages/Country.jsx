import { Card } from "../components/Card";

export function Country() {
    return (
        <div className="px-[20px] sm:px-[50px] md:px-[100px] xl:px-[200px] py-5 mt-10 mb-20">

           <div className="grid grid-col-1 gap-4 small:grid-cols-2 md:grid-cols-4  px-2">
           <div >
                <input className="w-full max-w-50 outline-none rounded-lg border border-gray-700 focus:border-blue-400 py-1 px-3 " type="text"  placeholder="Search"/>
            </div>
            <div className="max-w-20 border border-gray-700  px-6 rounded-2xl py-1">
                <button>Asc</button>
            </div>
            <div className="border max-w-20 border-gray-700 px-6 rounded-2xl py-1">
                <button>Desc</button>
            </div>
            <div className="relative rounded-lg max-w-50 border border-gray-700 px-2 py-1 ">
                <select name="" id="" className="bg-black w-full focus:outline-none">
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americans</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
           </div>

            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14">
                <div><Card worldname={"World"} padding={"p-8"} display={"inline-flex max-w-[250px]"} worldcapital={"No Capital"} worldpopulation={"Null"} worldregion={"erver states."} /></div>
                <div><Card worldname={"World"} padding={"p-8"} display={"inline-flex max-w-[250px]"} worldcapital={"No Capital"} worldpopulation={"Null"} worldregion={"erver states."} /></div>
                <div><Card worldname={"World"} padding={"p-8"} display={"inline-flex max-w-[250px]"} worldcapital={"No Capital"} worldpopulation={"Null"} worldregion={"erver states."} /></div>
                <div><Card worldname={"World"} padding={"p-8"} display={"inline-flex max-w-[250px]"} worldcapital={"No Capital"} worldpopulation={"Null"} worldregion={"erver states."} /></div>
                <div><Card worldname={"World"} padding={"p-8"} display={"inline-flex max-w-[250px]"} worldcapital={"No Capital"} worldpopulation={"Null"} worldregion={"erver states."} /></div>
                <div><Card worldname={"World"} padding={"p-8"} display={"inline-flex max-w-[250px]"} worldcapital={"No Capital"} worldpopulation={"Null"} worldregion={"erver states."} /></div>
            </div>  


        </div>
    )
}