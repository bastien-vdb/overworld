import React from 'react';

function Header() {
    return (
        <div className="navbar bg-base-100 flex justify-between items-center">
            <a className="btn btn-ghost normal-case text-xl">OpenWorld</a>
            <div className="tabs">
                <a className="tab tab-lifted font-bold">Tab 1</a>
                <a className="tab tab-lifted tab-active">Tab 2</a>
                <a className="tab tab-lifted">Tab 3</a>
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://avatars.githubusercontent.com/u/814546?v=4" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1000] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
