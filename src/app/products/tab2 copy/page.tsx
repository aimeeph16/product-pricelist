"use client";
import React, { useEffect, useState } from "react";
import Tabs from "../../components/Tabs";
import NavBar from "../../components/NavBar";
import { getRandomPrice } from "../../lib/randomNumber.js";

export default function Tab2() {
  const [multiplier, setMultiplier] = useState(0);
  const items = [
    { jenis: "Barang 1", hargaPerItem: 15000, hargaProduksi: 5000 },
    { jenis: "Barang 2", hargaPerItem: 24000, hargaProduksi: 12000 },
    { jenis: "Barang 3", hargaPerItem: 18000, hargaProduksi: 7000 },
    { jenis: "Barang 4", hargaPerItem: 12000, hargaProduksi: 8000 },
  ];

  useEffect(() => {
    setMultiplier(getRandomPrice(10, 15));
  }, []);

  useEffect(() => {
    console.log("multiplier in tab 2:", multiplier);
  }, [multiplier]);

  return (
    <div className="grid grid-rows-[8px_1fr_8px] items-center justify-items-center min-h-screen p-4">
      <NavBar />

      <main className="w-full h-[80%] flex flex-col gap-[32px] row-start-2 items-center px-8">
        <Tabs />
        <div className="w-full h-[80%] my-10">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">
                  Jenis Barang
                </th>
                {/* <th className="border border-gray-300 px-4 py-2">Lokasi</th> */}
                <th className="border border-gray-300 px-4 py-2">
                  Harga per Item (Rp)
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Harga Produksi (Rp)
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.jenis}
                  </td>
                  {/* <td className="border border-gray-300 px-4 py-2">Jakarta</td> */}
                  <td className="border border-gray-300 px-4 py-2">
                    {(item.hargaPerItem * multiplier).toLocaleString("en-US")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {(item.hargaProduksi * multiplier).toLocaleString("en-US")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
