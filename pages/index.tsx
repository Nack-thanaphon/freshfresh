import Image from "next/image";
import Link from "next/link";
export default function index() {
  return (
    <div className="container-fluid">
      <div className=" bg-green-500  py-3 text-center">
        <h1 className="text-green-white font-bold uppercase text-5xl  pb-2">
          Fresh fresh
        </h1>

        <h3 className="text-white">
          Organic Base 100 %
          <br />
          <span className="text-white">
           <small>
           #งานบุญ #งานบวช #งานแต่ง #งานสีดำ #งานสัมนา
           </small>
          </span>
        </h3>
      </div>
      <div className="py-2 bg-gradient-to-r from-green-500 to-green-800"></div>
      <img
        src="https://images.unsplash.com/photo-1611688370466-0e415a5c922e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        height="100%"
        width="100%"
        alt="img"
      />

      <footer className="py-5 bg-gradient-to-r from-green-400 to-green-900">
        <div className="py-5 text-center">
          <div className="py-5">
            <h1 className="text-3xl font-bold text-white ">
              Heathy & Delivery
            </h1>
            <small className="text-white">
            ถนนจรัญสนิทวงศ์ แขวงบางขุนศรี เขตบางกอกน้อย กรุงเทพมหานคร 10700 
            </small>
          </div>
          <div className="flex  justify-center text-white">
            <p className="px-1">Tel : 085-6644-6929</p>
            <p className="px-1">Line : FreshFresh</p>
            <p className="px-1">Website : <Link href="">FreshFresh.com</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
