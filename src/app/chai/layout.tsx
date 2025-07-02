export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <h2>New nav item
      
    </h2>
        {children}
    
    </>
  );
}