import { Layout } from '@msanvarov/core-components';
import { CartName } from '../components/CartName';
import { Content } from '../components/Content';

const myPage = () => {
  return (
    <Layout>
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4" data-aos="zoom-in">
              <CartName />
            </div>
            <div className='col-md-8 pt-md-0 pt-sm-5 pt-5' data-aos="zoom-in">
              <Content />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default myPage