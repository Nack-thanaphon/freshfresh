import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";

function Card_order() {
  const [product, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAll() {
      setLoading(true);
      const resp = await fetch(
        "http://localhost:1337/api/products?populate=p_img"
      );
      const data = await resp.json();
      setData(data);
      setLoading(false);
    }
    fetchAll();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!product) return <p>No profile data</p>;

  return (
    <>
      {product.data.map((product) => (
        <>
          <div className="w-full  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
            <div className="md:flex" key={product.id}>
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  width={150}
                  height={150}
                  src={
                    "http://localhost:1337" +
                    product.attributes.p_img.data.attributes.url
                  }
                  alt={product.attributes.p_title}
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
                  {product.attributes.p_title}
                </a>
                <div className="text-xs text-gray-600">{product.p_title}</div>
                <p className="mt-2 text-slate-500">
                  {product.attributes.p_detail}
                </p>
                <div className="text-md text-slate-300 py-3">
                  ยอดขาย 100 ขวด
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default Card_order;
