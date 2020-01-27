import React from 'react'
import { SpinnerBox, SolarSystem, EarthOrbit, Planet, VenusOrbit, MercuryOrbit, Sun } from '../../style/loading'

export const Loading = () => {
    return(
        <>
            <SpinnerBox>
                <SolarSystem>
                    <EarthOrbit>
                        <Planet />
                        <VenusOrbit>
                            <Planet />
                            <MercuryOrbit>
                                <Planet />
                                <Sun />
                            </MercuryOrbit>
                        </VenusOrbit>
                    </EarthOrbit>
                </SolarSystem>
            </SpinnerBox>
        </>
    )
}