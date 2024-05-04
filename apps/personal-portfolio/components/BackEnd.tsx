export const BackEnd = () => {
  return (
    <div className="row pb-4">
      <div className="col-1 icon-boxes">
        <i className='iconoir-codepen fs-1 back-end-icon' />
      </div>
      <div className="col-11">
        <h4 className="pt-1">
          <u>
            Back End Developer
          </u>
        </h4>
        <p>I possess expertise in various aspects of back-end development, including crafting complex application logic to meet business needs, database management such as designing schemas, and query optimization, as well as seamless integration between front-end and back-end of web applications.</p>
        <p>I also understand web security practices, including user access management, protection against attacks, and the use of HTTPS. Additionally, I have experience in developing responsive and robust APIs, along with proficiency in testing, debugging, and ensuring the scalability and performance of back-end applications.</p>
        <p>Here are two back-end frameworks that I commonly use in my projects.</p>
        <div className="d-flex">
          <img
            className="react-icon"
            src="/assets/platform_icon/rails-icon.png"
            alt="platform_icon"
            style={{
              maxWidth: '20px'
            }}
          />
          <div className="ps-1 pe-3">
            <a href="https://rubyonrails.org" target="_blank" className="platform-text">Ruby On Rails</a>
          </div>

          <img
            className="react-icon"
            src="/assets/platform_icon/laravel-icon.png"
            alt="platform_icon"
            style={{
              maxWidth: '20px'
            }}
          />
          <div className="ps-1">
            <a href="https://laravel.com" target="_blank" className="platform-text">Laravel</a>
          </div>
        </div>
      </div>
    </div>
  )
}