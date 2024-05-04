type ActionProps = {
  current_menu: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setCurrentMenu: Function;
}

export const Action = ({ current_menu, setCurrentMenu }: ActionProps) =>{
  let landingClass: string = 'pe-4 action'
  let contactMeClass: string = 'pe-4 action'
  if (current_menu === 1) landingClass = 'pe-4 active'
  if (current_menu === 3) contactMeClass = 'pe-4 active'

  return (
    <div className="d-flex justify-content-start">
      <ul className="nav">
        <li className={ landingClass } style={{ cursor: 'pointer' }} onClick={() => { setCurrentMenu(1) }}>Landing</li>
        {/* <li className="pe-4 action" style={{ cursor: 'pointer' }}>Experience</li> */}
        <li className={ contactMeClass } style={{ cursor: 'pointer' }} onClick={() => { setCurrentMenu(3) }}>Contact Me</li>
      </ul>
    </div>
  )
}