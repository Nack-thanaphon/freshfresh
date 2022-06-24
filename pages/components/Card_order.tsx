import { useEffect } from "react";
import { useState } from "react";

function Card_order() {
  const [product, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAll() {
      setLoading(true);
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
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
      {product.map((data) => (
        <>
          <div className="w-full  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
            <div className="md:flex" key={data.id}>
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
                  {data.name}
                </a>
                <div className="text-xs text-gray-600">{data.email}</div>
                <p className="mt-2 text-slate-500">"{data.website}"</p>
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
