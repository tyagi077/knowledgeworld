export function FooterCart(props) {

    return (
        <div className="flex  max-w-[200px] ">
            <div className=" flex items-center">
                {props.icon}
            </div>
            <div className="px-2">
                <div>
                    <p>Find us</p>
                </div>
                <div className=" min-w-[130px]">
                    <p className="text-sm text-[#646262] ">Pune. Maharashtra</p>
                </div>
            </div>
        </div>)
}


