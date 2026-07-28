import { Power } from "lucide-react";

function ToggleButton({

    active,

    onClick

}) {

    return (

        <button

            onClick={onClick}

            className={`rounded-lg p-2 text-white transition

            ${

                active

                    ? "bg-yellow-500 hover:bg-yellow-600"

                    : "bg-green-600 hover:bg-green-700"

            }`}

            title={

                active

                    ? "Deactivate User"

                    : "Activate User"

            }

        >

            <Power size={18} />

        </button>

    );

}

export default ToggleButton;