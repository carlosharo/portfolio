/* This component could be used to add custom layout to the about Page.  */
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    );
}