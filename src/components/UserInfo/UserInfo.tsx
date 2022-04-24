import { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import IconSocial from '../../components/Icon/Icon';
import './UserInfo.css';

interface UserInfoProps {
  name: string;
  username: string;
  photo?: string;
  social_medias: any;
};

export default function UserInfo({ name, username, photo, social_medias }: UserInfoProps) {

  const [social, setSocial] = useState<any[]>();

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
      <Avatar alt={name} sx={{ width: 100, height: 100 }} src={photo} />
      <div className='user__infos'>
        <h2 className='user'>{name}</h2>
        <h3 className='username'>@{username}</h3>
      </div>
      <div className='user__socialmedia'>
        <span>
          {social?.map((item) => <IconSocial name={item}/>)}
        </span>
      </div>
    </>
  )
};  