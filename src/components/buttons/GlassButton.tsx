import React from 'react';

type GlassButtonProps = {
    text: string;
    onClick: () => void;
}

function GlassButton({text, onClick}: GlassButtonProps) {
    return (
        <button className="btn glass" onClick={onClick}>{text}</button>
    );
}

export default GlassButton;