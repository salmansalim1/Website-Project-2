export default function Footer (){
    return(
        <div className=" flex justify-center gap-1 rounded-2xl px-2 py-2">
            <ol className="flex items-center justify-end ml-2 mr-2 px-2 py-2 cursor-pointer mt-96 ">
                <li className="text-white bg-black rounded-2xl px-4 py-4  mr-20">Contact us</li>
                <li className="text-white bg-black rounded-2xl px-4 py-4  mr-20">About us</li>
                <div className="flex items-end justify-end"><li className="text-white bg-black rounded-2xl px-4 py-4 mr-20 f">All Rights Reserved</li></div>
            </ol>
            
        </div>
        
    )
}