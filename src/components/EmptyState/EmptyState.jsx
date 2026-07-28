import { Inbox } from "lucide-react";

function EmptyState({
    message
}) {
    return (
        <div className="flex flex-col items-center justify-center py-10 text-gray-400">

            <Inbox
                size={60}
                strokeWidth={1.5}
            />

            <p className="mt-4 text-lg">
                {message}
            </p>

        </div>
    );
}

export default EmptyState;