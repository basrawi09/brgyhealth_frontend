import { CalendarDays, Clock4, HeartPulse } from "lucide-react";

function DashboardHeader() {

    const today = new Date();

    const currentHour = today.getHours();

    let greeting = "Good Evening";

    if (currentHour < 12) {

        greeting = "Good Morning";

    }

    else if (currentHour < 18) {

        greeting = "Good Afternoon";

    }

    const currentDate = today.toLocaleDateString(
        "en-US",
        {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );

    return (

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-8 text-white shadow-2xl">

            {/* Decorative Circles */}

            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10"></div>

            <div className="absolute -bottom-12 right-32 h-36 w-36 rounded-full bg-white/10"></div>

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                {/* Left Side */}

                <div>

                    <div className="mb-4 flex items-center gap-3">

                        <div className="rounded-2xl bg-white/20 p-3 backdrop-blur-sm">

                            <HeartPulse size={32} />

                        </div>

                        <div>

                            <p className="text-sm uppercase tracking-[0.3em] text-cyan-100">

                                Barangay Health Center

                            </p>

                            <h1 className="mt-1 text-4xl font-bold">

                                {greeting}, Administrator 👋

                            </h1>

                        </div>

                    </div>

                    <p className="max-w-2xl text-lg leading-relaxed text-cyan-100">

                        Welcome back! Monitor your staff, patients,
                        consultations, and overall health center activity
                        from one centralized dashboard.

                    </p>

                </div>

                {/* Right Side */}

                <div className="grid gap-4 sm:grid-cols-2">

                    <div className="rounded-2xl bg-white/15 p-5 backdrop-blur-md">

                        <div className="mb-3 flex items-center gap-2">

                            <CalendarDays size={20} />

                            <span className="font-semibold">

                                Today's Date

                            </span>

                        </div>

                        <p className="text-sm text-cyan-100">

                            {currentDate}

                        </p>

                    </div>

                    <div className="rounded-2xl bg-white/15 p-5 backdrop-blur-md">

                        <div className="mb-3 flex items-center gap-2">

                            <Clock4 size={20} />

                            <span className="font-semibold">

                                System Status

                            </span>

                        </div>

                        <p className="text-sm font-medium text-green-300">

                            ● Online

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default DashboardHeader;