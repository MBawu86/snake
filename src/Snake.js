import React from 'react';

export default (props) => {
    return (
        <div>
            {props.snakeDots.map((dot, i) => {
                const style = {
                    left: `${0}%`,
                    top:`${2}%`,
                }
                return (
                    <div className = 'snake-dot' key={1} style={style}> </div>
                )
            } 
            )
            }
        </div>
    )
}