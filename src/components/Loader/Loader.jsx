import css from './Loader.module.css';
import { Bars } from 'react-loader-spinner'

const Loader = () => {
  return (
<div className={css.loader}>
 <Bars
  height="80"
  width="80"
  color="#7d7878"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    </div>
  )
}

export default Loader
