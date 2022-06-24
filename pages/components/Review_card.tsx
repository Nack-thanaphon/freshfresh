import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="group flex items-center mx-auto">
            <img
              className="shrink-0 h-20 w-20 rounded-full "
              src="https://scontent.fbkk2-5.fna.fbcdn.net/v/t39.30808-6/289302849_592263558992497_2456027617632802949_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG0AX0rg2hQ7VlGfuJdk8ySJj3uHrkOxzsmPe4euQ7HO6NkMj0PZt_OXu7LXh5nnGH2_ONtCdEvDjkcZkGct6V7&_nc_ohc=YW5Atl5h23sAX8mSI7Q&_nc_ht=scontent.fbkk2-5.fna&oh=00_AT8wQAbve_kWLLUDOCsV-5MIYD9PWbWh5BWGeVZcbKPVfg&oe=62BAFC3E"
              alt=""
            />
            <div className="ltr:ml-3 rtl:mr-3 px-10">
              <p className="text-xs text-lg font-bold text-slate-700 text-start group-hover:text-slate-900">
                " ร้านอาหารอร่อยมากๆเลยครับ บริการเยี่ยม พนักงานน่ารัก
                ราคาไม่แพง "
              </p>
              <p className="text-sm font-medium text-slate-500 text-start group-hover:text-slate-700">
                ธนพล กัลปพฤกษ์
              </p>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="group flex items-center mx-auto">
            <img
              className="shrink-0 h-20 w-20 rounded-full "
              src="https://scontent.fbkk2-5.fna.fbcdn.net/v/t39.30808-6/289302849_592263558992497_2456027617632802949_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG0AX0rg2hQ7VlGfuJdk8ySJj3uHrkOxzsmPe4euQ7HO6NkMj0PZt_OXu7LXh5nnGH2_ONtCdEvDjkcZkGct6V7&_nc_ohc=YW5Atl5h23sAX8mSI7Q&_nc_ht=scontent.fbkk2-5.fna&oh=00_AT8wQAbve_kWLLUDOCsV-5MIYD9PWbWh5BWGeVZcbKPVfg&oe=62BAFC3E"
              alt=""
            />
            <div className="ltr:ml-3 rtl:mr-3 px-10">
              <p className="text-xs text-lg font-bold text-slate-700 text-start group-hover:text-slate-900">
                " ร้านอาหารอร่อยมากๆเลยครับ บริการเยี่ยม พนักงานน่ารัก
                ราคาไม่แพง "
              </p>
              <p className="text-sm font-medium text-slate-500 text-start group-hover:text-slate-700">
                ธนพล กัลปพฤกษ์
              </p>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="group flex items-center mx-auto">
            <img
              className="shrink-0 h-20 w-20 rounded-full "
              src="https://scontent.fbkk2-5.fna.fbcdn.net/v/t39.30808-6/289302849_592263558992497_2456027617632802949_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG0AX0rg2hQ7VlGfuJdk8ySJj3uHrkOxzsmPe4euQ7HO6NkMj0PZt_OXu7LXh5nnGH2_ONtCdEvDjkcZkGct6V7&_nc_ohc=YW5Atl5h23sAX8mSI7Q&_nc_ht=scontent.fbkk2-5.fna&oh=00_AT8wQAbve_kWLLUDOCsV-5MIYD9PWbWh5BWGeVZcbKPVfg&oe=62BAFC3E"
              alt=""
            />
            <div className="ltr:ml-3 rtl:mr-3 px-10">
              <p className="text-xs text-lg font-bold text-slate-700 text-start group-hover:text-slate-900">
                " ร้านอาหารอร่อยมากๆเลยครับ บริการเยี่ยม พนักงานน่ารัก
                ราคาไม่แพง "
              </p>
              <p className="text-sm font-medium text-slate-500 text-start group-hover:text-slate-700">
                ธนพล กัลปพฤกษ์
              </p>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="group flex items-center mx-auto">
            <img
              className="shrink-0 h-20 w-20 rounded-full "
              src="https://scontent.fbkk2-5.fna.fbcdn.net/v/t39.30808-6/289302849_592263558992497_2456027617632802949_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG0AX0rg2hQ7VlGfuJdk8ySJj3uHrkOxzsmPe4euQ7HO6NkMj0PZt_OXu7LXh5nnGH2_ONtCdEvDjkcZkGct6V7&_nc_ohc=YW5Atl5h23sAX8mSI7Q&_nc_ht=scontent.fbkk2-5.fna&oh=00_AT8wQAbve_kWLLUDOCsV-5MIYD9PWbWh5BWGeVZcbKPVfg&oe=62BAFC3E"
              alt=""
            />
            <div className="ltr:ml-3 rtl:mr-3 px-10">
              <p className="text-xs text-lg font-bold text-slate-700 text-start group-hover:text-slate-900">
                " ร้านอาหารอร่อยมากๆเลยครับ บริการเยี่ยม พนักงานน่ารัก
                ราคาไม่แพง "
              </p>
              <p className="text-sm font-medium text-slate-500 text-start group-hover:text-slate-700">
                ธนพล กัลปพฤกษ์
              </p>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="group flex items-center mx-auto">
            <img
              className="shrink-0 h-20 w-20 rounded-full md:shrink-0"
              src="https://scontent.fbkk2-5.fna.fbcdn.net/v/t39.30808-6/289302849_592263558992497_2456027617632802949_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG0AX0rg2hQ7VlGfuJdk8ySJj3uHrkOxzsmPe4euQ7HO6NkMj0PZt_OXu7LXh5nnGH2_ONtCdEvDjkcZkGct6V7&_nc_ohc=YW5Atl5h23sAX8mSI7Q&_nc_ht=scontent.fbkk2-5.fna&oh=00_AT8wQAbve_kWLLUDOCsV-5MIYD9PWbWh5BWGeVZcbKPVfg&oe=62BAFC3E"
              alt=""
            />
            <div className="ltr:ml-3 rtl:mr-3 px-10">
              <p className="text-xs text-lg font-bold text-slate-700 text-start group-hover:text-slate-900">
                " ร้านอาหารอร่อยมากๆเลยครับ บริการเยี่ยม พนักงานน่ารัก
                ราคาไม่แพง "
              </p>
              <p className="text-sm font-medium text-slate-500 text-start group-hover:text-slate-700">
                ธนพล กัลปพฤกษ์
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
