import React from 'react';
import { useSession } from "next-auth/react"

function UserBoxInfo() {
    const { data: session } = useSession();
    return (
        <div className='opacity-0 hidden sm:block group-hover:opacity-100 transition duration-300 ease-in-out'>
            <div className="relative rounded-lg border border-gray-200 shadow-lg">
                <div className="flex items-center gap-4 p-4">
                    <div>
                        <p className="font-medium text-gray-900">{session?.user?.name}</p>

                        <p className="line-clamp-1 text-sm text-gray-500">
                            {session?.user?.email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserBoxInfo;