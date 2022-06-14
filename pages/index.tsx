import Header from "./components/Header";
import Link from "next/link";
export default function index() {
  return (
    <div className="container-fluid h-full">
      <Header />
      <div className="h-full p-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 ">
          <div className="card bg-white-300 drop-shadow-lg h-50 w-full rounded shadow-lg">
            <div className="py-3 px-2 text-black text-center">
              <img className="h-auto w-full pb-3" src="https://images.unsplash.com/photo-1620417981458-1c9990f17b45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
              <div className="grid grid-cols-2  justify-between">
                <div className="text-start ">
                  <h1 className="text-blue-300">น้ำอัญชันมะนาว</h1>
                  <small>ButterFly Pea</small>
                  <small>สมุนภัยบำรุงร่างกาย</small>
                </div>
                <div className="">
                  <h1>39.-</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-white-300 drop-shadow-lg h-50 w-full rounded shadow-lg">
          <div className="py-3 px-2 text-black text-center">
              <img className="h-auto w-full pb-3" src="https://images.unsplash.com/photo-1620417981458-1c9990f17b45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
              <div className="grid grid-cols-2  justify-between">
                <div className="text-start ">
                  <h1 className="text-blue-300">น้ำอัญชันมะนาว</h1>
                  <small>ButterFly Pea</small>
                  <small>สมุนภัยบำรุงร่างกาย</small>
                </div>
                <div className="">
                  <h1>39.-</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-white-300 drop-shadow-lg h-50 w-full rounded shadow-lg">
          <div className="py-3 px-2 text-black text-center">
              <img className="h-auto w-full pb-3" src="https://images.unsplash.com/photo-1620417981458-1c9990f17b45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
              <div className="grid grid-cols-2  justify-between">
                <div className="text-start ">
                  <h1 className="text-blue-300">น้ำอัญชันมะนาว</h1>
                  <small>ButterFly Pea</small>
                  <small>สมุนภัยบำรุงร่างกาย</small>
                </div>
                <div className="">
                  <h1>39.-</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-white-300 drop-shadow-lg h-50 w-full rounded shadow-lg">
          <div className="py-3 px-2 text-black text-center">
              <img className="h-auto w-full pb-3" src="https://images.unsplash.com/photo-1620417981458-1c9990f17b45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
              <div className="grid grid-cols-2  justify-between">
                <div className="text-start ">
                  <h1 className="text-blue-300">น้ำอัญชันมะนาว</h1>
                  <small>ButterFly Pea</small>
                  <small>สมุนภัยบำรุงร่างกาย</small>
                </div>
                <div className="">
                  <h1>39.-</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-5 bg-gradient-to-r from-green-400 to-green-900">
        <div className="p-5 sm:text-center">
          <div className="py-5">
            <h1 className="text-3xl font-bold text-white ">
              Heathy & Delivery
            </h1>
            <small className="text-white">
              ถนนจรัญสนิทวงศ์ แขวงบางขุนศรี เขตบางกอกน้อย กรุงเทพมหานคร 10700
            </small>
          </div>
          <div className="sm:flex text-start justify-center text-white">
            <p className="px-1">Tel : 085-6644-6929</p>
            <p className="px-1">Line : FreshFresh</p>
            <p className="px-1">
              Website : <Link href="">FreshFresh.com</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
