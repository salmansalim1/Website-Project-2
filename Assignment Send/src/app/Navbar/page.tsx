import Link from "next/link"

export default function Navbar (){
    return(
        <div className="flex justify-between gap-1 rounded-2xl px-4 py-0">
            
           
            <ul className="flex justify-end items-center px-0 py-2 pt-4 pb-4 mt-2 cursor-pointer bg-[#032B44] rounded-2xl" > <img src="./c:\Users\123\Pictures\PakWheels-Logo-Blue-Tagline.png" height={150} width={150} className="mt-0 object-cover rounded-2xl"/>
                
                <li className=" text-stone-300 px-4 py-4 mr-7 ml-4 mt-2 mb-2 "><Link href="/Home">Home</Link></li>
                <li className=" text-stone-300 px-4 py-4 mr-7 ml-4 mt-2 mb-2"> <Link href="/Used Cars">Used Cars</Link></li>
                <li className=" text-stone-300 px-4 py-4 mr-7 ml-4 mt-2 mb-2"><Link href="/New Cars">New Cars</Link></li>
                <li className="text-stone-300 px-4 py-4 mr-7 ml-4 mt-2 mb-2"> Bikes</li>
                <li className=" text-stone-300 px-4 py-4 mr-7 ml-4 mt-2 mb-2"> <Link href="/Corolla">Corolla</Link></li>
                <li className=" text-stone-300 px-4 py-4 mr-7 ml-4 mt-2 mb-2"> <Link href="/Civic">Civic </Link></li>
                <li className=" text-stone-300 px-4 py-4 mr-7 ml-4 mt-2 mb-2">  <Link href="/Form">Form</Link></li>
                <li className=" text-stone-300 px-4 py-4 mr-7 ml-4 mt-2 mb-2">Blogs</li>
            </ul>
            
       
        </div>

        
    )
}