import React from "react";
import { Button } from "@mui/material";
import Image from "next/dist/client/image";
import Header from "./components/Header";
import Card_order from "./components/Card_order";
import Link from "next/link";
import Reiview_card from "./components/Review_card";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function index() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap py-5">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center sm:hidden">
              <div className="text-4xl font-bold uppercase">
                Fresh<span className="text-green-400">Fresh</span>.
              </div>
              <div>
                <img
                  src="https://image.flaticon.com/icons/svg/497/497348.svg"
                  alt=""
                  className="w-8"
                />
              </div>
            </nav>
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-6xl sm:text-8xl">
                  เฟรช<span className="text-green-400 ">เฟรช</span>
                </h1>
                <p className="text-xs">น้ำสมุนไพรเกรดพรีเมี่ยม</p>

                <div className="w-20 h-2 bg-green-400 my-4"></div>
                <p className="text-sm mb-10 text-justify">
                  <b>ร้านขายน้ำสมุนไพรออแกนิค</b>
                  <br />
                  เริ่มต้นจากการทำดื่มเองและแจกจ่ายให้กับผู้คนรอบข้างจุดเด่นคือกาารทำสดใหม่ทุกออเดอร์ เลือกสรรวัตุดิบที่สดใหม่
                  จึงอาจจะต้องมีการออเดอร์มา่กอน 2-3 วัน แต่ก็เป็นเรื่องของกระบวนการลิตที่ เน้นคุณภาพ
                  มากกว่าปริมาณ รสชาติมีความชื่นชอบในรสชาติ ที่ไม่หวานมาก เน้นสุขภาพดี
                  เราเลยคิดว่า ถ้าคนที่รักษ์สุขภาพได้ดื่มคงจะเป็นเรื่องดี
                </p>
                <button className="bg-green-400 text-white text-lg font-medium px-4 py-1 rounded-md shadow">
                  อ่านรีวิวของเรา
                </button>
              </div>
            </header>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1587302256613-0612040af6b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Leafs"
          className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
        />
      </div>

      {/* <div className="grid sm:grid-cols-3 mx-auto sm:px-20 h-full sm:p-10 sm:mx-5 sm:gap-5 p-3">
        <div className="col-span-2 my-auto ">
          <div className="sm:text-9xl invisible sm:visible font-bold">
            เฟรช
            <span className="text-green-400">เฟรช</span>
          </div>
          <div className="text-3xl py-5">เราคือใคร ?</div>
          <div className="text-secondary selection:bg-fuchsia-300 selection:text-fuchsia-900">
            <b>ร้านขายน้ำสมุนไพร</b> ออแกนิค
            เริ่มต้นจากการทำดื่มเองและแจกจ่ายให้กับผู้คนรอบข้าง
            <br />
            จุดเด่นคือกาารทำสดใหม่ทุกออเดอร์ เลือกสรรวัตุดิบที่สดใหม่
            จึงอาจจะต้องมีการออเดอร์มา่กอน 2-3 วัน
            <br /> แต่ก็เป็นเรื่องของกระบวนการลิตที่ เน้นคุณภาพ มากกว่าปริมาณ
            รสชาติ
            <br /> มีความชื่นชอบในรสชาติ ที่ไม่หวานมาก เน้นสุขภาพดี เราเลยคิดว่า
            ถ้าคนที่รักษ์สุขภาพได้ดื่มคงจะเป็นเรื่องดี
            <br />
            <b>การบริการ</b>
            <br />
            รับจัดน้ำถวายพระ งานบุญ งานบวช งานสีดำ งานต่างๆ
            <br /> และรับจัดกล่องอาหารสัมนาและการประชุม สามารถกดสั่งซื้อได้ที่
            <br /> หรือ ต้องการดูรีวิวสามารถกดดูได้ตามด่านล่างนี้เลย
            <br />
            <b>จัดส่งนอกสถานที่</b>
            <br />
            เรามีบริการจัดส่งนอกสถานที่ด้วยน้าา ศิริราช ส่ง ฟรีจ้า
          </div>
          <Button variant="contained" className="bg-green-400 w-5/5 my-5">
            <div className="text-lg">อ่านรีวิวร้านเรา</div>
          </Button>
        </div>
        <div className="col-span-1 mx-auto hidden sm:block ">
          <Image
            src="https://images.unsplash.com/photo-1587302256613-0612040af6b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            width={450}
            height={450}
          />
        </div>
      </div> */}
      <div className="grid sm:grid-cols-3 py-3 gap-5  sm:px-20 sm:mx-15">
        <div className="shadow-lg py-10 rounded-lg">
          <div className="grid-cols p-5">
            <div className="text-3xl font-bold text-green-400">คุณภาพ</div>
            <div className="text-tiny font-thin">
              สินค้าผลิตทุกวัน จันทร์-ศุกร์
            </div>
            <div className="text-xs text-gray-400">Made Order by Order</div>
          </div>
        </div>
        <div className="shadow-lg py-10 rounded-lg">
          <div className="grid-cols p-5">
            <div className="text-3xl font-bold text-green-400">
              วัตถุดิบสดใหม่
            </div>
            <div className="text-tiny font-thin">
              วัตถุดิบ สด สะอาด คุณภาพดี
            </div>
            <div className="text-xs text-gray-400">Everyday Material</div>
          </div>
        </div>
        <div className="shadow-lg py-10 rounded-lg">
          <div className="grid-cols p-5">
            <div className="text-3xl font-bold text-green-400">ดื่มง่าย</div>
            <div className="text-tiny font-thin">
              เน้นการดึงรสชาติของสมุนไพรจริงๆ
            </div>

            <div className="text-xs text-gray-400">Real test Herb Drink</div>
          </div>
        </div>
      </div>
      <div className="sm:my-30 sm:p-10">
        <div className="flex justify-between py-5 px-2 ">
          <div className="text-3xl text-start font-bold ">เมนูร้านเรา</div>
          <div className="text-sm p-1 text-white w-fit my-auto rounded-full bg-green-600">
            <Link href="/product">
              <a>ดูทั้งหมด</a>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 m-2 sm:grid-cols-2 gap-3   sm:m-5 text-center">
          <Card_order />
        </div>
        <div className="flex justify-between py-5 ">
          <div className="text-3xl text-start font-bold ">โปรโมชั่น</div>
          <div className="text-sm p-1 text-white w-fit my-auto rounded-full bg-green-600">
            ดูทั้งหมด
          </div>
        </div>
        <div className="grid grid-cols-1  m-5 text-center">
          <Card_order />
        </div>
        <div className="flex justify-between py-5 ">
          <div className="text-3xl text-start font-bold p-5">BOX-SET</div>
          <div className="text-sm p-1 text-white w-fit my-auto rounded-full bg-green-600">
            ดูทั้งหมด
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3  m-5 text-center">
          <Card_order />
        </div>
        <div className="flex justify-between py-5 ">
          <div className="text-3xl text-start font-bold p-5">
            รีวิวจากลูกค้า
          </div>
          <div className="text-sm p-1 text-white w-fit my-auto rounded-full bg-green-600">
            ดูทั้งหมด
          </div>
        </div>
        <div className="grid grid-cols-1  m-5 text-center">
          <Reiview_card />
        </div>
        <div className="py-10 ">
          <button className="text-3xl text-start font-bold p-5">บทความ</button>
        </div>
        <div className="grid grid-cols-1  m-5 ">
          <ul
            role="list"
            className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"
          >
            <li>
              <h3 className="text-lg">
                <span className="text-green-600">Lorem, ipsum.</span> Lorem,
                ipsum dolor.
              </h3>
            </li>
            <li>
              <h3 className="text-lg">
                <span className="text-green-600">Lorem, ipsum.</span> Lorem,
                ipsum dolor.
              </h3>
            </li>{" "}
            <li>
              <h3 className="text-lg">
                <span className="text-green-600">Lorem, ipsum.</span> Lorem,
                ipsum dolor.
              </h3>
            </li>{" "}
            <li>
              <h3 className="text-lg">
                <span className="text-green-600">Lorem, ipsum.</span> Lorem,
                ipsum dolor.
              </h3>
            </li>{" "}
            <li>
              <h3 className="text-lg">
                <span className="text-green-600">Lorem, ipsum.</span> Lorem,
                ipsum dolor.
              </h3>
            </li>{" "}
            <li>
              <h3 className="text-lg">
                <span className="text-green-600">Lorem, ipsum.</span> Lorem,
                ipsum dolor.
              </h3>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
