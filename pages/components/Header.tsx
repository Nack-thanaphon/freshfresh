import Link from "next/link";

export default function Header() {
  return (
    <div className="sm:flex justify-between my-4 sm:m-8  hidden">
      <div className="text-2xl md:text-4xl text-center    font-bold tracking-tight ">
        <Link href="/">
          <a className="sm:text-start">
            Fresh<span className="text-green-400 ">Fresh</span>
          </a>
        </Link>
        .
      </div>
      <div className="my-auto  sm:block hidden">
        <ul className="flex flex-between">
          <li className="mx-2">เกี่ยวกับเรา</li>
          <li className="mx-2">รายการอาหาร</li>
          <li className="mx-2">
            บทความ | <span className="text-green-600">สูตรอาหาร</span>{" "}
          </li>
          <li className="mx-2">รีวิวร้าน</li>
          <li className="mx-2">ติดต่อเรา</li>
        </ul>
      </div>
    </div>
  );
}
