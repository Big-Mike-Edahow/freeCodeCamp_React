// index.jsx

const { useState } = React;

export const ColorPicker = () => {
    const [color, setColor] = useState('#ffffff');
    function handleColorChange(event) {
        setColor(event.target.value);
    }
    return (
        <div id="color-picker-container" style={{ backgroundColor: color }}>
            <label htmlFor="color-input">Select a Color</label>
            <input id="color-input" type="color" value={color} onChange={handleColorChange} />
        </div>
    )
};
