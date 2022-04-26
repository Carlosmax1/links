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
  'linkedin';
  width?: number | string;
  height?: number | string;
  padding?: number | string;
  margin?: number | string;
};

export default function IconSocial({ name, width, height, margin, padding }: IconProps) {

  return (
    <>
      {name === 'facebook' && (
        <FacebookIcon 
        style={{width: width, height: height, padding: padding, margin: margin}}/>
      )}
      {name === 'twitter' && (
        <TwitterIcon style={{width: width, height: height, padding: padding, margin: margin}}/>
      )}
      {name === 'github' && (
        <GitHubIcon style={{width: width, height: height, padding: padding, margin: margin}} />
      )}
      {name === 'youtube' && (
        <YouTubeIcon style={{width: width, height: height, padding: padding, margin: margin}} />
      )}
      {name === 'instagram' && (
        <InstagramIcon style={{width: width, height: height, padding: padding, margin: margin}} />
      )}
      {name === 'linkedin' && (
        <LinkedInIcon style={{width: width, height: height, padding: padding, margin: margin}} />
      )}
    </>
  )

} 