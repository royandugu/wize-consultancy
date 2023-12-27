import DashboardLayout from "../../../components/adminComponents/secondaryComponents/dashboardLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <DashboardLayout>
          {children}
        </DashboardLayout>
      </body>
    </html>
  )
} 
