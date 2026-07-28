function Pagination({
    currentPage,
    totalPages,
    onPageChange
}) {
    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="mt-6 flex items-center justify-between">

            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium transition hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
                ← Previous
            </button>

            <div className="flex gap-2">

                {Array.from(
                    { length: totalPages },
                    (_, index) => {

                        const page = index + 1;

                        return (

                            <button
                                key={page}
                                onClick={() => onPageChange(page)}
                                className={
                                    currentPage === page
                                        ? "rounded-lg bg-blue-600 px-4 py-2 text-white"
                                        : "rounded-lg bg-gray-200 px-4 py-2 hover:bg-gray-300"
                                }
                            >
                                {page}
                            </button>

                        );

                    }
                )}

            </div>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium transition hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
            >
                Next →
            </button>

        </div>
    );
}

export default Pagination;