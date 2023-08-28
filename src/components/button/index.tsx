import { ElementType, MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.module.css';

interface ButtonProps {
   type?: 'button' | 'submit' | 'reset';
   as?: 'button' | 'Link';
   color?: string;
   full?: boolean;
   variant?: 'primary' | 'secondary';
   disabled?: boolean;
   loading?: boolean;
   icon?: ElementType;
   children?: ReactNode;
   id?: string;
   onClick?: MouseEventHandler;
   className: string;
   outline?: 'black';
}

interface VariantType {
   primary: string;
   secondary: string;
}

interface OutlineType {
   black: string;
}

const VARIANT: VariantType = {
   primary: styles.btnPrimary,
   secondary: styles.btnSecondary,
};

const OUTLINE: OutlineType = {
   black: styles.blackOutline,
};

const Button = ({
   type = 'button',
   variant = 'primary',
   full,
   children = null,
   className = '',
   outline = 'black',
   onClick,
   ...restProps
}: ButtonProps) => {
   const classes = classNames(
      styles.btnContainer,
      full && styles.btnFull,
      VARIANT[variant],
      outline && OUTLINE[outline],
      className,
   );
   return (
      <button {...restProps} type={type} className={classes} onClick={onClick}>
         {children}
      </button>
   );
};

export default Button;

Button.propTypes = {
   variant: PropTypes.string,
   outline: PropTypes.string,
   onClick: PropTypes.func,
   icon: PropTypes.string,
   size: PropTypes.string,
};
