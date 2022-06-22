export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 px-6">
     
        <div className="py-28 flex flex-col justify-between lg:flex-row items-center">
          <div className="grid grid-cols-1  py-10 ">
            <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
              สุขกาย <span className="text-green-500">สุขใจ</span> .
            </h3>
            <p className="sm:text-tiny  text-xs">
              ถนนจรัญสนิทวงศ์ แขวงบางขุนศรี เขตบางกอกน้อย กรุงเทพมหานคร 10700
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-green-500 hover:bg-white hover:text-green-600 border border-green-400 text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              เพิ่มเพื่อน LINE OFFICIAL
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/`}
              className="mx-3 font-bold hover:underline"
            >
              ติดตาม Facebook
            </a>
          </div>
        </div>
     
    </footer>
  );
}
