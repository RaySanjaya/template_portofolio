import { useState } from "react"
import { Action } from "./Action"
import { ContentRendering } from "./ContentRendering"

export const Content = () => {
  const [currentMenu, setCurrentMenu] = useState<number>(1)

  return (
    <>
      <Action current_menu={ currentMenu } setCurrentMenu={ setCurrentMenu } />
      <br />
      <ContentRendering current_menu= { currentMenu } />
      {/* <AbaoutMe />
      <br />
      <WhatIDo /> */}
    </>
  )
}