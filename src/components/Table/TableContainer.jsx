function TableContainer({
    children
}) {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full">
                {children}
            </table>
        </div>
    );
}

export default TableContainer;