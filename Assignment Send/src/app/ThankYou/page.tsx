import Link from "next/link"
export default function ThankYou(){
    return(
        <div className="flex justify-center mb-4 gap-4"><Link href="Home">
            <h1 className="text-align: text-center text-5xl mb-20 mt-20" ><u>THANK YOU FOR SHOPPING</u></h1>
            <br/>
            <button className="rounded-2xl px-4 py-4 mt-10 border-solid border-2 bg-purple-900 text-white flex justify-center">Back To Home Page 
                
            
            </button></Link>

        </div>
    )
}