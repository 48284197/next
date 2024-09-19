import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
  bg?: string;
  className?: string;
};

const BaseSecting = (props: Props) => {
  const style = {
    background: props.bg,
  };

  return (
    <>
      <section
        className={`bg-gray-100 px-5 py-16 ${props.className}`}
        style={style}
      >
        <div className="banner  xs:w-full mx-auto my-0 sm:w-full md:w-full lg:w-4/5 xl:w-4/5 ">
          <div className="title my-3 text-center text-2xl font-bold text-black/80">
            {props.title}
          </div>
          {props.children}
        </div>
      </section>
    </>
  );
};

export { BaseSecting };
