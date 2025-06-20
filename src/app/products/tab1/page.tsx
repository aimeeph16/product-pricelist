"use client";
import React from "react";
// import React, { useEffect } from "react";

import Tabs from "../../components/Tabs";
import NavBar from "../../components/NavBar";
// import { useMultiplierStore } from "@/app/lib/useMultiplierStore";
import data from "../../data/data.json";

export default function Tab1() {
  // const multiplier = useMultiplierStore((state) => state.multiplier);
  // const initMultiplier = useMultiplierStore((state) => state.initMultiplier);

  // useEffect(() => {
    // initMultiplier();
  // });

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
                  Kode Produk
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Nama Barang
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Deskripsi Produk
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Harga Produksi (Rp)
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Harga per Item (Rp)
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data
                .filter((p) => p.kode.substring(0, 3) === "JKT")
                .map((p) => (
                  <tr key={p.kode}>
                    <td className="border border-gray-300 px-4 py-2">
                      {p.kode}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {p.nama}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {p.deskripsi}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {p.biaya_produksi_idr?.toLocaleString("en-US")}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {p.harga_jual_idr?.toLocaleString("en-US")}
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
