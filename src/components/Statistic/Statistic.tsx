import './Statistic.css';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Statistic(){
  return(
    <>
      <div className='box__sta'>
        <div className='sta__visu'>
        <VisibilityIcon className='visu__icon' color='primary' sx={{fontSize: 50}}/>
          <span className='visu__text'>
            Total de Visualizações
          </span>
          <span className='visu__num'>
            100
          </span>
        </div>
      </div>
    </>
  )
};