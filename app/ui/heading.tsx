import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
interface TextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Text({ children, className, ...rest }: TextProps) {
  return (
    <Text
      {...rest}
      className={clsx(
        'flex h-10 md:w-24 lg:w-28 justify-center items-center rounded-full bg-[#37535E] md:px-2 lg:px-4 md:text-xs lg:text-sm font-medium text-[#FFFFFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        className,
      )}
    >
      {children}
    </Text>
  );
}
