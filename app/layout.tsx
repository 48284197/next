import TabBar from '@/components/nav/mobileTabBar';
import '@/style/global.css'
import "reset.css"



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

      </head>
      <body>
        {children}
        <TabBar />
      </body>




    </html>
  );
}
