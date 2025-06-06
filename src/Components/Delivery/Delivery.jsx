import { Percent } from "lucide-react";

const Delivery = () =>{
    return(
        <div className="lg:container flex items-center justify-between py-10">
            <div className="grid grid-cols-4">
                <div className="delivery_wrapper">
                    <div className="flex items-center justify-between gap-4">
                        <p><Percent className="text-black" /></p>
                        <div>
                            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-2.5">Discount</h4>
                            <h5 className="text-sm text-[#]font-inter font-normal">Every week new sales</h5>
                        </div>
                        
                    </div>
                </div>
            </div>
             
        </div>
    )
}
export default Delivery; 