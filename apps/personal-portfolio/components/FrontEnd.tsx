export const FrontEnd = () => {
  return (
    <div className="row">
      <div className="col-1 icon-boxes">
        <i className='iconoir-code fs-1 front-end-icon' />
      </div>
      <div className="col-11">
        <h4 className="pt-1">
          <u>
            Front End Developer
          </u>
        </h4>
        <p>Here are two front-end frameworks that I commonly use in my projects.</p>
        <div className="d-flex">
          <img
            className="react-icon"
            src="/assets/platform_icon/react-icon.png"
            alt="platform_icon"
            style={{
              maxWidth: '20px'
            }}
          />
          <div className="ps-1 pe-3">
            <a href="https://react.dev" target="_blank" className="platform-text">React JS</a>
          </div>

          <img
            className="react-icon"
            src="/assets/platform_icon/next-icon.png"
            alt="platform_icon"
            style={{
              maxWidth: '20px'
            }}
          />
          <div className="ps-1">
            <a href="https://nextjs.org" target="_blank" className="platform-text">Next JS</a>
          </div>
        </div>
      </div>
    </div>   
  )
}