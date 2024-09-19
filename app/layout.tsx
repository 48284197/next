import CenterNav from '@/components/nav/centerNav';
import TabBar from '@/components/nav/mobileTabBar';
import '@/style/global.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>
        

   
          {children}
        <TabBar />
      </body>




    </html>
  );
}
