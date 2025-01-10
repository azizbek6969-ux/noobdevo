import { TfiMenuAlt } from "react-icons/tfi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { useState } from "react";



function Lead() {
  const [menu, setMenu] = useState("alt")
  return (
    <div>
      <div className="flex items-center justify-between p-10">
        <div className="w-28 h-10 flex items-center justify-center]">
          <button
            className={`w-full h-full rounded-tl-xl rounded-bl-xl ${menu == "alt" ? "bg-[#006FEE] text-white" : "border border-[#006FEE] text-[#006FEE]"}`}
            onClick={() => setMenu("alt")}
          ><TfiMenuAlt className="mx-auto" /></button>
          <button
            className={`w-full h-full rounded-tr-xl rounded-br-xl ${menu == "alt" ? "border border-[#006FEE] text-[#006FEE]" : "bg-[#006FEE] text-white"}`}
            onClick={() => setMenu("app")}
          ><HiOutlineViewGrid className="mx-auto" /></button>
        </div>

        <button className="bg-[#006FEE] py-3 px-10 rounded-xl text-white  hover:text-[#006FEE] border border-[#006FEE] hover:bg-white">+ Add lead</button>
      </div>
    </div>
  )
}

export default Lead
