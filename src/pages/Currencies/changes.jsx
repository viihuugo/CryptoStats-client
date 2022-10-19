import React from 'react'
import { Negative , Positive , Percentage , AthPercentage , AtlPercentage , Result } from './styles'

function PriceChange ({percentageChange}) {
  return (
    <>
        {percentageChange < 0 ? (
            <Percentage><Negative>{percentageChange.toFixed(2)}%</Negative></Percentage>
        ) : (
            <Percentage><Positive>{percentageChange.toFixed(2)}%</Positive></Percentage>
        )}
    </>
  )
};

function AthChange ({percentageAth}) {
  return (
    <>
        {percentageAth < 0 ? (
            <AthPercentage><Negative>{percentageAth.toFixed(2)}%</Negative></AthPercentage>
        ) : (
            <AthPercentage><Positive>{percentageAth.toFixed(2)}%</Positive></AthPercentage>
        )}
    </>
  )
};


function AtlChange ({percentageAtl}) {
  return (
    <>
        {percentageAtl< 0 ? (
            <AtlPercentage><Negative>{percentageAtl.toFixed(2)}%</Negative></AtlPercentage>
        ) : (
            <AtlPercentage><Positive>{percentageAtl.toFixed(2)}%</Positive></AtlPercentage>
        )}
    </>
  )
};

function FullyValuation ({fullyValuation}) {
  return (
    <>
      {fullyValuation > 1 ? (
        <Result>${fullyValuation.toLocaleString()}</Result>
      ) : (
        <Result>--</Result>
      )}
    </>
  )
}

function MSupply ({maxSupply}) {
  return (
    <>
      {maxSupply > 0 ? (
        <Result>{maxSupply.toLocaleString()}</Result>
      ) : (
        <Result>--</Result>
      )}
    </>
  )
}

export  { PriceChange , AthChange , AtlChange  , FullyValuation , MSupply }

