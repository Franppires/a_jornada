import styled from 'styled-components'

const Base = styled.div`
  height: 10px;
  width: 250px;
  background-color: white;
  margin-left: 80px;
`
const VerticalLine = styled.div`
  height: 250px;
  width: 10px;
  background-color: white;
  margin-left: 150px;
`
const HorizontalLine = styled.div`
  height: 10px;
  width: 135px;
  background-color: white;
  position: absolute;
  right: 80px;
  top: 0;
`
const VerticalLineSmall = styled.div`
  height: 40px;
  width: 10px;
  background-color: white;
  margin-left: 150px;
  position: absolute;
  top: 0;
  right: 70px;
`

const Head = styled.div`
  height: 30px;
  width: 30px;
  border: 8px solid white;
  border-radius: 50%;
  position: absolute;
  top: 35px;
  right: 52px;
`
const Body = styled.div`
  height: 80px;
  width: 10px;
  background-color: white;
  position: absolute;
  top: 75px;
  right: 70px;
`
const RightArm = styled.div`
  height: 10px;
  width: 50px;
  background-color: white;
  position: absolute;
  top: 90px;
  right: 30px;
  rotate: -30deg;
`
const LeftArm = styled.div`
  height: 10px;
  width: 50px;
  background-color: white;
  position: absolute;
  top: 90px;
  right: 70px;
  rotate: 30deg;
`
const RightLeg = styled.div`
  height: 10px;
  width: 50px;
  background-color: white;
  position: absolute;
  top: 160px;
  right: 30px;
  rotate: 30deg;
`
const LeftLeg = styled.div`
  height: 10px;
  width: 50px;
  background-color: white;
  position: absolute;
  top: 160px;
  right: 70px;
  rotate: -30deg;
`

const bodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg ]

interface HangmanDrawingProps { 
  numberOfGuesses: number;
}

export default function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps) { 
  return ( 
    <div style={{ position: 'relative' }} >
      {bodyParts.slice(0, numberOfGuesses).map((BodyParty, index) => { 
        return <BodyParty key={index}/>
      })}
      {/* <LeftLeg />
      <RightLeg />
      <LeftArm />
      <RightArm />
      <Body />
      <Head /> */}
      <VerticalLineSmall />
      <HorizontalLine />
      <VerticalLine /> 
      <Base /> 
    </div>
  )
}
