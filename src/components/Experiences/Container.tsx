import { experiences } from '@/data/experiences';
import { Display, Paragraph, Title } from '../Atoms/Typography';

type ContainerProps = React.ComponentProps<typeof Display>;

export default function Container({ children, ...props }: ContainerProps) {
  function getBgByIndex(index: number) {
    return index % 2 === 0 ? 'bg-primary-black' : 'bg-(--zinc-800)';
  }

  return (
    <>
      {experiences.map((exp, index) => (
        <div
          key={exp.id}
          className={`
            p-8 border border-(--zinc-500) 
            rounded-[10px] w-full
            ${getBgByIndex(index)}
          `}
        >
          <div className="flex flex-col gap-4">
            <div className="flex md:flex-row flex-col justify-between md:items-center">
              <div className="w-3/4">
                <Title color="white" className="selection-light">
                  {exp.empresa} | {exp.cargo}
                </Title>
              </div>

              <Paragraph
                weight="semibold"
                color="zinc300"
                className="selection-light"
              >
                {exp.inicio} - {exp.fim}
              </Paragraph>
            </div>

            <Paragraph color="zinc300" className="selection-light">
              {exp.descricao}
            </Paragraph>
          </div>
        </div>
      ))}
    </>
  );
}
