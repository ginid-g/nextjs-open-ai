export default function DashbaordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>Dashboard Layout</header>
      <main>{children}</main>
    </>
  );
}
