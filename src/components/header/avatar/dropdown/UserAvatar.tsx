import React from 'react';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react";

function UserAvatar() {
    const { data: session, status } = useSession();
    return (
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
                <img src={session?.user?.image as any}  alt="user avatar" />
            </div>
        </label>
    );
}

export default UserAvatar;