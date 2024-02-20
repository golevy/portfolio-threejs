import * as React from "react"
import { Canvas } from "@react-three/fiber"

const Computers = () => {
  return <div>Computers</div>
}

const ComputersCanvas = () => {
  return (
    <Canvas>
      <React.Suspense></React.Suspense>
    </Canvas>
  )
}

export default ComputersCanvas
