import { Trash2 } from "lucide-react";

function DeleteButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="rounded-lg bg-red-600 p-2 text-white transition hover:bg-red-700"
        >
            <Trash2 size={18} />
        </button>
    );
}

export default DeleteButton;