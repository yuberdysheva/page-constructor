import React, {ReactNode, useCallback, useContext} from 'react';
import {Button, ButtonSize, Icon} from '@yandex-data-ui/common';
import arrowIcon from '@yandex-data-ui/common/assets/icons/arrow-sidebar.svg';
import {LocationContext} from '../../context/locationContext';
export type Theme = 'default' | 'special';

export interface BackLinkProps {
    url: string;
    title: ReactNode;
    theme?: Theme;
    size?: ButtonSize;
    className?: string;
    shouldHandleBackAction?: boolean;
}

export default function BackLink(props: BackLinkProps) {
    const {history} = useContext(LocationContext);
    const {
        url,
        title,
        theme = 'default',
        size = 'l',
        className,
        shouldHandleBackAction = false,
    } = props;

    const backActionHandler = useCallback(async () => {
        if (!history) {
            return;
        }

        if (history.length > 1) {
            history.goBack();
        } else {
            history.push({pathname: url});
        }
    }, [history, url]);

    return (
        <Button
            className={className}
            view={theme === 'special' ? 'flat-contrast' : 'flat-secondary'}
            size={size}
            href={shouldHandleBackAction ? undefined : url}
            onClick={shouldHandleBackAction ? backActionHandler : undefined}
        >
            <Icon data={arrowIcon} size={24} />
            <span>{title}</span>
        </Button>
    );
}