function DeleteModal({
    isOpen,
    title = "Delete Record",
    message = "Are you sure you want to delete this record?",
    onCancel,
    onConfirm
}) {

    if (!isOpen) {
        return null;
    }

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

            <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">

                <div className="border-b px-6 py-4">

                    <h2 className="text-xl font-bold text-red-600">

                        {title}

                    </h2>

                </div>

                <div className="space-y-4 px-6 py-6">

                    <p className="text-gray-600">

                        {message}

                    </p>

                </div>

                <div className="flex justify-end gap-3 border-t px-6 py-4">

                    <button

                        onClick={onCancel}

                        className="rounded-lg border border-gray-300 px-5 py-2 font-medium hover:bg-gray-100"

                    >

                        Cancel

                    </button>

                    <button

                        onClick={onConfirm}

                        className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700"

                    >

                        Delete

                    </button>

                </div>

            </div>

        </div>

    );

}

export default DeleteModal;