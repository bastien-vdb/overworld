import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import UserBoxInfo from './UserBoxInfo';
import DropDown from '@/components/header/avatar/dropdown/DropDown';

function Avatar() {
    return (
        <div className='group transition duration-300 ease-in-out'>
            <UserBoxInfo />
            <DropDown />
        </div>
    );
}

export default Avatar;