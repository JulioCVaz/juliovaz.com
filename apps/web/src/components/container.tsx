export default function Container({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="w-full max-w-5xl px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
      {children}
    </div>
  );
}
