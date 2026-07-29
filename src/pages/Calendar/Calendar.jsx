import { useEffect, useMemo, useState } from "react";

import {
    format,
    addDays,
    subDays,
    setHours,
    setMinutes
} from "date-fns";

import {
    ChevronLeft,
    ChevronRight,
    CalendarDays,
    Clock,
    LoaderCircle
} from "lucide-react";

import API from "../../services/api";

import toast from "react-hot-toast";

function Calendar() {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const [appointments, setAppointments] = useState([]);

    const [loading, setLoading] = useState(false);

    const timeSlots = useMemo(() => {

        const slots = [];

        let current = setMinutes(setHours(new Date(), 7), 0);

        const end = setMinutes(setHours(new Date(), 17), 0);

        while (current <= end) {

            slots.push(format(current, "hh:mm a"));

            current = new Date(current.getTime() + 30 * 60000);

        }

        return slots;

    }, []);

    useEffect(() => {

        loadSchedule();

    }, [selectedDate]);

    async function loadSchedule() {

        setLoading(true);

        try {

            const formattedDate = format(

                selectedDate,

                "yyyy-MM-dd"

            );

            const response = await API.get(

                "/consultations/calendar/",

                {

                    params: {

                        date_selected: formattedDate

                    }

                }

            );

            const formattedAppointments = response.data.map((item) => ({

                ...item,

                time: format(

                    new Date(

                        `2000-01-01T${item.consultation_time}`

                    ),

                    "hh:mm a"

                )

            }));

            setAppointments(formattedAppointments);

        }

        catch (error) {

            console.error(error);

            toast.error("Failed to load calendar.");

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <div className="space-y-6">

            <div className="rounded-xl bg-white p-6 shadow">

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <div className="flex items-center gap-3">

                        <CalendarDays className="text-blue-600" />

                        <div>

                            <h1 className="text-2xl font-bold">

                                Appointment Calendar

                            </h1>

                            <p className="text-gray-500">

                                Daily Appointment Scheduler

                            </p>

                        </div>

                    </div>

                    <div className="flex items-center gap-3">

                        <button

                            onClick={() =>

                                setSelectedDate(

                                    subDays(

                                        selectedDate,

                                        1

                                    )

                                )

                            }

                            className="rounded-lg border p-2 hover:bg-gray-100"

                        >

                            <ChevronLeft />

                        </button>

                        <h2 className="min-w-[220px] text-center text-lg font-semibold">

                            {format(

                                selectedDate,

                                "MMMM dd, yyyy"

                            )}

                        </h2>

                        <button

                            onClick={() =>

                                setSelectedDate(

                                    addDays(

                                        selectedDate,

                                        1

                                    )

                                )

                            }

                            className="rounded-lg border p-2 hover:bg-gray-100"

                        >

                            <ChevronRight />

                        </button>

                    </div>

                </div>

            </div>

            <div className="rounded-xl bg-white shadow">

                {

                    loading &&

                    <div className="flex items-center justify-center gap-3 p-10">

                        <LoaderCircle

                            className="animate-spin text-blue-600"

                        />

                        Loading appointments...

                    </div>

                }

                {

                    !loading &&

                    timeSlots.map((slot) => {

                        const appointment = appointments.find(

                            item => item.time === slot

                        );

                        return (

                            <div

                                key={slot}

                                className="grid grid-cols-12 border-b last:border-none"

                            >

                                <div className="col-span-2 flex items-center justify-center border-r bg-slate-50 py-6 font-semibold text-blue-700">

                                    <Clock

                                        size={16}

                                        className="mr-2"

                                    />

                                    {slot}

                                </div>

                                <div className="col-span-10 p-4">

                                    {

                                        appointment ?

                                        (

                                            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-4 transition hover:shadow">

                                                <div className="flex items-center justify-between">

                                                    <h3 className="font-bold">

                                                        {appointment.patient_name}

                                                    </h3>

                                                    <span className="rounded-full bg-blue-600 px-3 py-1 text-xs text-white">

                                                        Scheduled

                                                    </span>

                                                </div>

                                                <p className="mt-2 text-sm">

                                                    Diagnosis:

                                                    {" "}

                                                    <strong>

                                                        {appointment.diagnosis}

                                                    </strong>

                                                </p>

                                                <p className="text-sm">

                                                    Medicine:

                                                    {" "}

                                                    <strong>

                                                        {appointment.medicine}

                                                    </strong>

                                                </p>

                                            </div>

                                        )

                                        :

                                        (

                                            <div className="rounded-lg border border-dashed p-4 text-gray-400">

                                                Available

                                            </div>

                                        )

                                    }

                                </div>

                            </div>

                        );

                    })

                }

            </div>

        </div>

    );

}

export default Calendar;