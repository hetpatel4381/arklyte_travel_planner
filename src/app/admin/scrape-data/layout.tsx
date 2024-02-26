import { Sidebar } from "@/components/admin/sidebar";
import React from "react";
import ScrapeData from "@/app/admin/scrape-data/page";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-[#f5f5fe] flex">
      <Sidebar />
      <section className="flex-1 flex flex-col">
        <div className="h-48 bg-[#0e1428] text-white flex justify-center flex-col px-10 gap-3">
          <h1 className="text-5xl">Scrape Data</h1>
          <p>The scraping engine is power by Het Patel</p>
        </div>
        <ScrapeData />
      </section>
    </section>
  );
};

export default AdminLayout;
