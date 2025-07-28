import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Header />

      <div className="flex flex-1 md:pl-18">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>

      <Footer />
    </div>
  );
}
