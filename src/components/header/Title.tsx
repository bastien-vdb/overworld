import React from 'react';

type TitleProps = {
    text: string,
}

const Title = ({text}:TitleProps) => {
    return (<div className='hidden sm:block'><a className="btn btn-ghost normal-case text-xl">{text}</a></div>);
}

export default Title;