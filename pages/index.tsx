import React from "react";
import { Button } from "@mui/material";
import Image from "next/dist/client/image";
import Header from "./components/header";
import Card_order from "./components/Card_order";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function index() {
  return (
    <>
      <Header />
      <div className="grid sm:grid-cols-3 mx-auto sm:px-20 h-full p-10 sm:mx-5 sm:gap-5 ">
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
        <div className="col-span-1 mx-auto invisible sm:visible ">
          <Image
            src="https://images.unsplash.com/photo-1587302256613-0612040af6b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            width={450}
            height={450}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-3 py-3 gap-5 sm:px-20 sm:mx-15">
        <div className="shadow-lg py-10 rounded-lg">
          <div className="grid-cols p-5">
            <div className="text-3xl font-bold text-green-400">คุณภาพ</div>
            <div className="text-tiny font-thin">
              สินค้าผลิตทุกวัน จันทร์-ศุกร์
            </div>
          </div>
        </div>
        <div className="shadow-lg py-10 rounded-lg">
          <div className="grid-cols p-5">
            <div className="text-3xl font-bold text-green-400">
              วัตถุดิบสดใหม่
            </div>
            <div className="text-tiny font-thin">
              วัตถุดิบ สด สะอาด คุณภาพ ดี
            </div>
          </div>
        </div>
        <div className="shadow-lg py-10 rounded-lg">
          <div className="grid-cols p-5">
            <div className="text-3xl font-bold text-green-400">ดื่มง่าย</div>
            <div className="text-tiny font-thin">
              เน้นการดึงรสชาติของสมุนไพรจริงๆ เพื่อสุขภาพ และความอร่อย
            </div>
          </div>
        </div>
      </div>
      <div className="sm:my-30">
        <div className="py-5 ">
          <button className="text-3xl text-start font-bold p-5">
            เมนูร้านเรา
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3  m-5 text-center">
          <Card_order />
          <Card_order />
          <Card_order />
          <Card_order />
          <Card_order />
          <Card_order />
        </div>
        <div className="py-5 ">
          <button className="text-3xl text-start font-bold p-5">
            โปรโมชั่น
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3  m-5 text-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="py-5 ">
          <button className="text-3xl text-start font-bold p-5">
            ชุดอาหาร
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3  m-5 text-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="py-5 ">
          <button className="text-3xl text-start font-bold p-5">
            รีวิวจากลูกค้า
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3  m-5 text-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
}
