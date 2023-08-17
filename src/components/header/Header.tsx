import React from 'react';
import Tab from '@/components/tabs/Tabs';
import Avatar from './avatar/Avatar';
import Title from '@/components/header/Title';

function Header() {
    return (
        <div className="navbar bg-base-100 flex justify-between items-center">
            <Title text="OpenWorld"/>
            <Tab />
            <Avatar />
        </div>
    );
}

export default Header;
