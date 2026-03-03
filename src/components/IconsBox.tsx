import { Github } from '../assets/icons/github';
import { LinkedIn } from '../assets/icons/linkedin';
import { IconButton } from './Button';

export default function Social() {
  return (
    <>
      <IconButton icon={<Github />} url="https://github.com/juliadmoura" />
      <IconButton
        icon={<LinkedIn />}
        url="https://www.linkedin.com/in/juliadamacena/"
      />
    </>
  );
}
