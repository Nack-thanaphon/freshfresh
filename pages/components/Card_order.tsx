export default function Card_order() {
  return (
    <div className="w-full  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="https://images.unsplash.com/photo-1655979921395-2316b22235e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80"
            alt="Man looking at item at a store"
          />
        </div>
        <div className="p-8 text-start">
          <div className="uppercase rounded-full w-fit tracking-wide text-sm text-white px-2 mb-2 bg-indigo-500 ">
            เมนูแนะนำ
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            น้ำอัญชันมะนาว
          </a>
          <div className="text-xs text-gray-600">Buterfy pea juice</div>
          <p className="mt-2 text-slate-500">
            "หวานหอมกลิ่น มะนาว คุณประโยชน์จากน้ำอัญชัน "
          </p>
          <div className="text-md text-slate-300 py-3">ยอดขาย 100 ขวด</div>
        </div>
      </div>
    </div>
  );
}
