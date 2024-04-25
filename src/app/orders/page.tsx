"use client";

import { useRouter } from "next/navigation";

const Orders = () => {
  const router = useRouter();
  const clickHandler = () => {
    router.back();
  };
  return (
    <div>
      <p className="font-bold">Order Page Page</p>
      <button
        type="button"
        className="inline-flex items-center rounded-md bg-slate-500 px-3 py-2 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-400"
        onClick={() => clickHandler()}
      >
        Back
      </button>
    </div>
  );
};

export default Orders;
