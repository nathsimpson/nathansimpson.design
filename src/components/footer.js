/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '../../design-system/theme';
import { Divider } from '../../design-system/divider';
import { Text } from '../../design-system/typography';
import { TextLinkGatsby } from '../../design-system/textlink';
import { Stack } from '../../design-system/stack';

import { footer_navItems, footer_socialNetworks } from '../data';

export const Footer = () => (
  <Stack gap="medium" marginY="xlarge" align="center" as="footer">
    <Divider />

    <ul
      style={{
        margin: 0,
        fontSize: 26,
        listStyle: 'none',
        padding: 0
      }}
    >
      {footer_navItems.map(item => (
        <li
          style={{ display: 'inline-block', margin: '0px 5px' }}
          key={item.name}
        >
          <TextLinkGatsby to={item.url} size="small">
            {item.label}
          </TextLinkGatsby>
        </li>
      ))}
    </ul>

    <Text size="xsmall" as="span" align="center">
      &copy; Copyright 2021 Nathan Simpson. Made in Sydney Australia.
    </Text>

    <ul
      style={{
        margin: 0,
        fontSize: 26,
        listStyle: 'none',
        padding: 0
      }}
    >
      {footer_socialNetworks.map(network => (
        <li
          style={{ display: 'inline-block', margin: '0px 5px' }}
          key={network.name}
        >
          <a
            css={{
              color: colors.foreground,
              textDecoration: 'none',

              '&:hover': {
                color: colors.link
              }
            }}
            href={network.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={network.icon} />
          </a>
        </li>
      ))}
    </ul>
  </Stack>
);
