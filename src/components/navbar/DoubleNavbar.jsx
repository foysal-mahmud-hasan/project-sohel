import { useState } from 'react';
import { UnstyledButton, Tooltip, Title, rem } from '@mantine/core';
import {
    IconHome2,
    IconForms,
    IconTable,
    IconTableColumn
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './DoubleNavbar.module.css';
import { Link } from 'react-router-dom';


const mainLinksMockdata = [
    { icon: IconHome2, label: 'Home' },
    { icon: IconForms, label: 'Form' },
    { icon: IconTable, label: 'Table' },
    { icon: IconTableColumn, label: 'Nested-Table' },
];

const linksMockdata = [
    'Home',
    'Form',
    'Table',
    'Nested-Table',
    'Action-Table'

];

export function DoubleNavbar() {
    const [active, setActive] = useState('Releases');
    const [activeLink, setActiveLink] = useState('Settings');

    const mainLinks = mainLinksMockdata.map((link) => (
        <Tooltip
            label={link.label}
            position="right"
            withArrow
            transitionProps={{ duration: 0 }}
            key={link.label}
        >
            <UnstyledButton
                onClick={() => setActive(link.label)}
                className={classes.mainLink}
                data-active={link.label === active || undefined}
            >
                <link.icon style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    ));

    const links = linksMockdata.map((link) => (
        <Link
            style={{ borderRadius: "20px round", padding: "5px", margin: "2px" }}
            className={classes.link + (activeLink === link ? ' ' + classes.selected : '')}
            data-active={activeLink === link || undefined}
            to={`/${link}`}
            key={link}
            onClick={() => setActiveLink(link)}
        >
            {link}
        </Link>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.wrapper}>
                <div className={classes.aside}>
                    <div className={classes.logo}>
                        <MantineLogo type="mark" size={30} />
                    </div>
                    {mainLinks}
                </div>
                <div className={classes.main}>
                    <Title order={4} className={classes.title}>
                        {active}
                    </Title>

                    {links}
                </div>
            </div>
        </nav>
    );
}