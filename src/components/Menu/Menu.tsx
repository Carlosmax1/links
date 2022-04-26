import { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import IconSocial from '../Icon/Icon';
import './Menu.css';
import { useAuth } from '../../contexts/auth';

interface MenuProps {
  name: string;
  username: string;
  photo?: string;
  social_medias: any;
};

export default function Menu({ name, username, photo, social_medias}: MenuProps) {

  const [social, setSocial] = useState<any[]>();
  const auth = useAuth();

  useEffect(() => {
    const getSocial = () => {
      let list: any = [];
      Object.keys(social_medias).forEach((item) => {
        list.push(item);
      });
      setSocial(list);
    }
    getSocial();
  }, [])

  return (
    <>
      <div className='menu'>
        <div className='user__infos'>
          <Avatar alt={name} sx={{ width: 80, height: 80 }} src={photo} />
          <div className='user__info-name'>
            <h2 className='user__name'>{name}</h2>
            <h2 className='user__name--username'>site/{username}</h2>
          </div>
        </div>
        <div className='menu__items'>
          {auth.nav === 'customizar' ? <li className='items-active'>Customizar</li> : <li onClick={() => auth.navChange('customizar')} className='items'>Customizar</li> }
          {auth.nav === 'links' ? <li className='items-active'>links</li> : <li className='items' onClick={() => auth.navChange('links')} >links</li> }
          {auth.nav === 'social' ? <li className='items-active'>social</li> : <li className='items' onClick={() => auth.navChange('social')}>social</li> }
          {auth.nav === 'estatisticas' ? <li className='items-active'>estatisticas</li> : <li className='items' onClick={() => auth.navChange('estatisticas')}>estatisticas</li> }
        </div>
        <div className='user__socialmedia'>
          <span className='socialmedia__icons'>
            {social?.map((item) => <IconSocial name={item} width={30} height={30} margin={9}/>)}
          </span>
        </div>
      </div>
    </>
  )
};  