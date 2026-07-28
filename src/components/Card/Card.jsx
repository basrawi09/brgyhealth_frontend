function Card({
    title,
    children
}) {
    return (
        <div className="rounded-2xl bg-white shadow">

            <div className="border-b p-6">

                <h2 className="text-xl font-semibold text-gray-700">
                    {title}
                </h2>

            </div>

            <div className="p-6">
                {children}
            </div>

        </div>
    );
}

export default Card;