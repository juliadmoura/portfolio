import { IconButton } from './Button';
import { Github } from './icons/github';
import { LinkedIn } from './icons/linkedin';

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
