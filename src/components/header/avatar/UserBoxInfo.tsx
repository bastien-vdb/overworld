import React from 'react';
import { useSession } from "next-auth/react"

function UserBoxInfo() {
    const { data: session, status } = useSession();
    return (
        <div className='opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
            <div className="chat chat-end">
                <div style={{ paddingRight: '30px' }} className="chat-bubble text-sm">{session?.user?.name}<br />{session?.user?.email}<br /></div>
            </div>
        </div>
    );
}

export default UserBoxInfo;