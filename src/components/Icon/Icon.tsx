import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface IconProps {
  name: 'facebook' |
  'twitter' |
  'github' |
  'youtube' |
  'instagram' |
  'linkedin' 
};

export default function IconSocial({ name }: IconProps) {

  return (
    <>
      {name === 'facebook' && (
        <FacebookIcon />
      )}
      {name === 'twitter' && (
        <TwitterIcon  />
      )}
      {name === 'github' && (
        <GitHubIcon />
      )}
      {name === 'youtube' && (
        <YouTubeIcon />
      )}
      {name === 'instagram' && (
        <InstagramIcon />
      )}
      {name === 'linkedin' && (
        <LinkedInIcon />
      )}
    </>
  )

} 