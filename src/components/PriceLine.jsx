import React, { Component } from 'react';

class PriceLine extends Component {
    componentDidMount() {
        this.props.init();
    }

    render() {
        const {
            top,
            className,
            draggable,
            isDragging,
            priceDisplay,
            setDragLine,
            visible,
            zIndex,
            uncentered,
            offScreen,
            lineStyle,
            color,
            foregroundColor,
            width,
        } = this.props;

        return (
            <div
                className={`chart-line horizontal ${draggable ? 'draggable' : ''} ${isDragging ? 'dragging' : ''} ${className || ''}`}
                style={{ top, zIndex, color: foregroundColor, borderColor: color }}
                ref={setDragLine}
                hidden={!visible}
                uncentered={uncentered ? 'true' : undefined}
                off-screen={offScreen ? 'true' : undefined}
            >
                <div className="drag-line" style={{ borderTopStyle: lineStyle }} />
                <div className="draggable-area" />
                <div className="drag-price" style={{ backgroundColor: color, width }}>
                    <div className="price">{priceDisplay}</div>
                </div>
            </div>
        );
    }
}

export default PriceLine;
