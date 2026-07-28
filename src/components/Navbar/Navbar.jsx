import { Bell, UserCircle2 } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      <div>
        <h1 className="text-2xl font-bold text-blue-700">
          Barangay Health Center
        </h1>

        <p className="text-sm text-gray-500">
          Management System
        </p>
      </div>

      <div className="flex items-center gap-5">
        <Bell className="cursor-pointer text-gray-500 hover:text-blue-600" />

        <div className="flex items-center gap-2">
          <UserCircle2
            size={35}
            className="text-blue-600"
          />

          <div>
            <p className="text-sm font-semibold">
              Administrator
            </p>

            <p className="text-xs text-gray-500">
              Welcome back
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;