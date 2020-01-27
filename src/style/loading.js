import styled from 'styled-components';

export const SpinnerBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`

export const SolarSystem = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const EarthOrbit = styled.div`
    width: 165px;
    height: 165px;
    -webkit-animation: spin 12s linear 0s infinite;
    position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #5c5291;
	border-radius: 50%;
`

export const Planet = styled.div`
    position: absolute;
    top: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #040038;
`

export const VenusOrbit = styled.div`
    @keyframes spin {
        from {
        transform: rotate(0);
        }
        to{
        transform: rotate(359deg);
        }
    }
    width: 120px;
    height: 120px;
    -webkit-animation: spin 7.4s linear 0s infinite;
    position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #5c5291;
	border-radius: 50%;
`

export const MercuryOrbit = styled.div`
    width: 90px;
    height: 90px;
    -webkit-animation: spin 3s linear 0s infinite;
    position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #5c5291;
	border-radius: 50%;
`

export const Sun = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #b55035;
`
