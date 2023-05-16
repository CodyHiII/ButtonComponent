import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

interface DefaultProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'info';
  size: 'sm' | 'md' | 'lg' | 'smIcon' | 'mdIcon' | 'lgIcon';
  href?: string;
  children?: React.ReactNode;
  startIcon?: string | React.ReactElement;
  endIcon?: string | React.ReactElement;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: any;
  rounded?: boolean;
  outline?: boolean;
}

type ButtonProps = {
  as: 'button';
  href?: never;
  target?: never;
  download?: never;
  onClick?: () => void;
};

type AnchorProps = {
  as: 'a';
  href: string;
  target?: '_blank';
  download?: boolean;
  onClick?: never;
};

type LinkTagProps = {
  as: 'Link';
  href: any;
  target?: never;
  download?: never;
  onClick?: never;
};

type AsProps = ButtonProps | AnchorProps | LinkTagProps;

type Props = DefaultProps & AsProps;

const Button = ({
  as = 'button',
  href,
  children,
  variant,
  startIcon,
  endIcon,
  fullWidth,
  size,
  onClick,
  target,
  download,
  disabled,
  className,
  rounded,
  outline,
}: Props) => {
  const currentVariant = useMemo(() => styles[variant], [variant]);
  const btnSize = useMemo(() => styles[size], [size]);

  const width = useMemo(
    () => (fullWidth ? '100%' : 'max-content'),
    [fullWidth]
  );

  const icon = useMemo(() => {
    return (icon: any) => {
      if (typeof icon === 'string') {
        return <img className={styles.icon} src={icon} alt='icon' />;
      } else if (React.isValidElement(icon)) {
        return icon;
      }
    };
  }, [startIcon, endIcon]);

  const renderMainText = useMemo(() => {
    return (
      <>
        {startIcon && <span className={styles.btnIcon}>{icon(startIcon)}</span>}
        {children}
        {endIcon && <span className={styles.btnIcon}>{icon(endIcon)}</span>}
      </>
    );
  }, [startIcon, endIcon, children]);

  const Wrapper = useMemo(() => {
    switch (as) {
      case 'button':
        return 'button';
      case 'a':
        return 'a';
      case 'Link':
        return Link;
      default:
        return 'button';
    }
  }, [as]);

  return (
    <Wrapper
      href={href}
      to={href}
      target={target}
      download={download && href}
      style={{ width }}
      className={`${styles.default} ${currentVariant} ${btnSize} ${
        disabled && styles.disabled
      } ${className} ${rounded && styles.rounded} ${outline && styles.outline}`}
      onClick={onClick}
    >
      <span className={styles.mainBtnText}>{renderMainText}</span>
    </Wrapper>
  );
};

export default Button;
