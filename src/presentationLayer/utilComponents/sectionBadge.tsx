interface Props {
    title: string,
    icon: JSX.Element
}

export const SectionBadge: React.FC<Props> = ({title, icon}): JSX.Element => {
    return (
        <>
            <h4 className='section-badge'>
                {icon}
                <span>{title}</span>
            </h4>
        </>
    );
}