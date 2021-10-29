import React from 'react';
import {block} from '../../utils';
import {HTML} from '@doc-tools/components';

import {SecurityBlockProps} from '../../models';
import FullWidthBackground from '../../components/FullWidthBackground/FullWidthBackground';
import {Grid, Row, Col} from '../../grid';
import Link from '../../components/Link/Link';
import Media from '../../components/Media/Media';
import AnimateBlock from '../../components/AnimateBlock/AnimateBlock';

import './Security.scss';

const b = block('SecurityBlock');

const SecurityBlock: React.FC<SecurityBlockProps> = (props) => {
    const {backgroundColor, theme = 'dark', title, points, media, animated} = props;

    return (
        <AnimateBlock className={b({theme})} offset={200} animate={animated}>
            <div className={b('content')}>
                <FullWidthBackground className={b('background')} style={{backgroundColor}} />
                <Grid>
                    <Row>
                        <Col>
                            <h2 className={b('title')}>{title}</h2>
                        </Col>
                    </Row>
                    {points && (
                        <Row className={b('points')}>
                            {points.map(({text, link, img}, index) => (
                                <Col key={index} className={b('point')} sizes={{sm: 4, all: 12}}>
                                    <img className={b('point-icon')} src={img} />
                                    <HTML className={b('point-text')} block={true}>
                                        {text}
                                    </HTML>
                                    {link && (
                                        <Link
                                            className={b('point-link')}
                                            text={link.text}
                                            url={link.url}
                                            theme={'normal'}
                                            arrow={true}
                                        />
                                    )}
                                </Col>
                            ))}
                        </Row>
                    )}
                    {media && (
                        <Row className={b('media')}>
                            <Col>
                                <Media className={b('media')} {...media} />
                            </Col>
                        </Row>
                    )}
                </Grid>
            </div>
        </AnimateBlock>
    );
};

export default SecurityBlock;
