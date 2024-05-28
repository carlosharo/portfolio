type PTCodeFormatProps = {
    code: string;
}

export const PTCodeFormat: React.FC<PTCodeFormatProps> = ({ code }) => {

    console.log('#Log: code');
    console.log(code);
    return (
        <pre>
            <code>
                {code}
            </code>
        </pre>
    )
}