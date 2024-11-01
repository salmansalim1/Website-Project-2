import Link from "next/link"
export default function Form(){
    return (
        <div>
        <form className="flex flex-col w-50 justify-center items-center ">
        <h1 className="text-center font-extrabold justify-center text-2xl capitalize mb-3">Enter Details below</h1>
        <input type="Email" placeholder="Enter Your FirstName" className="rounded-xl px-4 py-2 mb-3 justify-center border-solid border-2 border-x-gray-950 border-y-zinc-950"/>
        <input type="password" placeholder="Enter your LastName" className="capitalize rounded-xl px-4 py-2 mb-3 justify-center bolder-solid border-2 border-gray-950"/>
        <input type="First Name" placeholder="Enter Name Of Car" className="capitalize rounded-xl px-4 py-2 mb-3 justify-center bolder-solid border-2 border-gray-950"/>        
        <input type="Last name" placeholder="Enter Model no." className="capitalize rounded-xl px-4 py-2 mb-3 justify-center bolder-solid border-2 border-gray-950"/>
        <input type="Number of Pieces" placeholder="Mode of Payment" className="capitalize rounded-xl px-4 py-2 mb-3 justify-center bolder-solid border-2 border-gray-950"/>
        </form>
        <div className="flex justify-center items-center"><Link href="ThankYou">
        <button className="rounded-2xl px-4 py-4 mb-1 border-solid border-2 bg-purple-900 text-white">
          Place Your Order
        </button>
        </Link>
        </div> 
      
      
      </div>
    )
}