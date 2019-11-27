import * as React from "react"

import { palette } from "../../utils/presets"
import {
  testSafeMathRandom,
  testSafeSample,
} from "../../utils/helpers/testSafeRandomness"

import { getLikelihoodOfBeingBlank } from "./DecorativeDots.helpers"
import Dot, { DotProps } from "./Dot"

interface DecorativeDotsProps {
  width: number;
  height: number;
  dotSize: number;
  angle?: number;
  fadeStrength?: number;
}

// These colors were chosen somewhat haphazardly from previous assets.
// For now, this is not customizable, colors are meant to be semi-randomly
// drawn from our design palette.
const COLORS = [
  palette.red[400],
  palette.red[600],
  palette.orange[400],
  palette.orange[600],
  palette.yellow[400],
  palette.green[200],
  palette.green[400],
  palette.blue[200],
  palette.blue[400],
  palette.magenta[200],
  palette.magenta[500],
  palette.purple[400],
  palette.purple[600],
  palette.teal[200],
  palette.teal[500],
  palette.teal[700],
]

// Every circle is given a random opacity, but it's weighted so that outliers
// don't happen much.
const OPACITIES = [0.15, 0.25, 0.25, 0.25, 0.5, 0.5, 0.75]

const generateDotData = (
  numRows: number,
  numCols: number,
  angle: number,
  dotSize: number,
  fadeStrength: number
): Array<DotProps> => {
  const dots = []

  const dotSpacing = Math.round(dotSize / 10)
  const totalDotSpace = dotSize + dotSpacing

  for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
    for (let colIndex = 0; colIndex < numCols; colIndex++) {
      const likelihoodOfBeingBlank = getLikelihoodOfBeingBlank(
        angle,
        colIndex,
        rowIndex,
        numCols,
        numRows
      )

      const isBlank =
        likelihoodOfBeingBlank * testSafeMathRandom() < fadeStrength

      if (!isBlank) {
        dots.push({
          x: colIndex * totalDotSpace,
          y: rowIndex * totalDotSpace,
          color: testSafeSample(COLORS) as string,
          opacity: testSafeSample(OPACITIES) as number,
          size: dotSize,
        })
      }
    }
  }

  return dots
}

const dotSvgStyles = {
  // We want to let the circles at the edge of the SVG spill out, not get
  // cropped by the SVG boundaries. Cropping will naturally occur if we
  // position this SVG at an edge of the viewport =)
  overflow: `visible`,
}

const DecorativeDots: React.FC<DecorativeDotsProps> = ({
  width,
  height,
  dotSize,
  angle = 0,
  fadeStrength = 0.25,
}) => {
  const numRows = Math.floor(height / dotSize)
  const numCols = Math.floor(width / dotSize)

  const dots = generateDotData(numRows, numCols, angle, dotSize, fadeStrength)

  return (
    <svg width={width} height={height} style={dotSvgStyles} aria-hidden={true}>
      {dots.map((dot, i) => (
        <Dot
          key={i}
          x={dot.x}
          y={dot.y}
          color={dot.color}
          opacity={dot.opacity}
          size={dot.size}
        />
      ))}
    </svg>
  )
}

export default React.memo(DecorativeDots)
