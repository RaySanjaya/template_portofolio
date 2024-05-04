import { en } from '@msanvarov/i18n';

export const CartName = () => {
  return (
    <div className="shadow-box">
      <div className='p-2'>
        <div className="d-flex justify-content-center">
          <img src={en.landing.bio.media} alt="profile" />
        </div>

        <div className="infos">
          <h1 className='text-white text-center'>Ray Sanjaya</h1>
          <div className='d-flex justify-content-center'>
            <h6 style={{ backgroundColor: 'rgb(17 17 17)' }} className='d-inline-block p-2 rounded'>Software Engineer</h6>
          </div>
          <div className='social-media d-flex justify-content-center icon-boxes p-2'>
            <a href="#" className='pe-2'>
              <i className='iconoir-instagram social-media fs-2'/>
            </a>
            <a href="#" className='pe-2'>
              <i className='iconoir-facebook-tag social-media fs-2' />
            </a>
            <a href="#" className='pe-2'>
              <i className='iconoir-github-circle social-media fs-2' />
            </a>
            <a href="#">
              <i className='iconoir-linkedin social-media fs-2' />
            </a>
          </div>

          <div className='m-3 p-4 rounded-3 icon-boxes' style={{ backgroundColor: 'rgb(17 17 17)' }}>
            <div className='row'>
              <div className='col-2'>
                <i className='iconoir-smartphone-device text-secondary fs-1 pe-2' />
              </div>
              <div className='col-10'>
                <small className='text-secondary'>Phone</small>
                <br />
                <label>0813 7449 8366</label>
              </div>
            </div>
            <hr />
            <div className='row'>
              <div className='col-2'>
                <i className='iconoir-mail text-secondary fs-2 pt-1 pe-2' />
              </div>
              <div className='col-10'>
                <small className='text-secondary'>Email</small>
                <br />
                <label>ray.snjya@gmail.com</label>
              </div>
            </div>
            <hr />
            <div className='row'>
              <div className='col-2'>
                <i className='iconoir-pin text-secondary fs-2 pt-1 pe-2' />
              </div>
              <div className='col-10'>
                <small className='text-seondary'>Location</small>
                <br />
                <label>Medan, Indonesia</label>
              </div>
            </div>
            <hr />
            <div className='row'>
              <div className='col-2'>
                <i className='iconoir-gift text-secondary fs-2 pt-1 pe-2' />
              </div>
              <div className='col-10'>
                <small className='text-seondary'>Birthday</small>
                <br />
                <label>March 06, 1998</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}