import { AbaoutMe } from "./AbaoutMe";
import { ContactMe } from "./ContactMe";
import { WhatIDo } from "./WhatIDo";

type ContentRenderingProps = {
  current_menu: number;
}

export const ContentRendering = ({current_menu}: ContentRenderingProps) => {
  if (current_menu === 1) {
    return (
      <div>
        <AbaoutMe />
        <br />
        <WhatIDo />
      </div>
    )
  }

  if (current_menu === 3) {
    return (
      <>
        <ContactMe />
      </>
    )
  }
}