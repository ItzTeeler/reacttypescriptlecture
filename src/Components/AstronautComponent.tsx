import React, { useState } from 'react';
import Astronaut from '../Interfaces/interface';

const AstronautComponent = (props: { shipName: string, members: string[] }) => {
    return (
        <div>
            {/* <h1>{astronautInfo && astronautInfo.people.map(person => `${person.name} ${person.craft}`)}</h1> */}
            <h1>{props.shipName}</h1>
            {
                props.members.map((name, index) => {
                    return (
                        <div key={index}>
                            <h3>{name}</h3>
                            <br />
                        </div>
                    )
                })
            }
            <hr />
        </div>
    )
}

export default AstronautComponent
