import { Pencil } from "lucide-react";

function EditButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="rounded-lg bg-amber-500 p-2 text-white transition hover:bg-amber-600"
        >
            <Pencil size={18} />
        </button>
    );
}

export default EditButton;