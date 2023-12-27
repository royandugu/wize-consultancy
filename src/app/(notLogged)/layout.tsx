require("dotenv").config();

import AosWrapper from '../../../components/systemComponents/wrapper/aosWrapper';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <AosWrapper>
                    {children}
                </AosWrapper>
            </body>
        </html>
    )

}



