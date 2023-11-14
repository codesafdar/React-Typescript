import React from 'react';

interface GetProps {
  textColor: string
  textData: string
}

const Index = ({ textColor, textData }: GetProps) => {
  return (
    <>
      <h1 style={{ color: textColor }}>{textData}</h1>
    </>
  )
}

export default Index