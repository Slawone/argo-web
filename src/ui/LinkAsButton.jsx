export const LinkAsButton = ({
  href = '',
  target = '_blank',
  children
}) => {
  return (
    <a
      className="px-5 bg-[#171717] dark:bg-[#ededed] border-transparent text-white dark:text-[#0a0a0a] hover:bg-[#383838] dark:hover:bg-[#ccc] h-11 flex items-center justify-center gap-2 rounded-full border border-solid md:hover:scale-110 transition-all font-sans cursor-pointer"
      href={href}
      target={target}
    >
      {children}
    </a>
  )
}