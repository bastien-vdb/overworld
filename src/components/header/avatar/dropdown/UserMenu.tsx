import React from 'react';
import { signOut } from 'next-auth/react';
import { useSession } from "next-auth/react";

function UserMenu() {
    const { data: session } = useSession();
    return (
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1000] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a onClick={() => signOut()}>Logout</a></li>
            <li className='sm:hidden'>-</li>
            <li className='text-xs sm:hidden'>{session?.user?.name}</li>
            <li className='text-xs sm:hidden'>{session?.user?.email}</li>
        </ul>
    );
}

export default UserMenu;