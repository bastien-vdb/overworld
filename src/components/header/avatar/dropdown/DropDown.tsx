import React from 'react';
import UserAvatar from '@/components/header/avatar/dropdown/UserAvatar';
import UserMenu from '@/components/header/avatar/dropdown/UserMenu';

function DropDown() {
    return (
        <div className="dropdown dropdown-end">
            <UserAvatar />
            <UserMenu />
        </div>
    );
}

export default DropDown;