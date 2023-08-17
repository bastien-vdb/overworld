import React from 'react';
import { useSession } from "next-auth/react"

function UserBoxInfo() {
    const { data: session, status } = useSession();
    return (
        <div className='opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
            <div className="chat chat-end">
                <div style={{ paddingRight: '30px' }} className="chat-bubble text-sm">
                    <span>{session?.user?.name}</span><br />
                    <span className='hidden'>{session?.user?.email}</span>
                    <br /></div>
            </div>

            <dialog id="my_modal_2" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
}

export default UserBoxInfo;