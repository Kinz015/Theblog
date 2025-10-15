type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="text-slate-300 bg-slate-900 min-h-screen dark:text-slate-900 dark:bg-slate-300 ">
      <div className="max-w-screen-lg mx-auto px-8">{ children }</div>
    </div>
  )
}
