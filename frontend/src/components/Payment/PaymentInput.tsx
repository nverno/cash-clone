import React, { FC } from 'react';
import classnames from 'classnames';
import { getCanvasFontSize, getTextWidth } from '../../utils';

export interface PaymentInputProps {
  setValue: React.Dispatch<React.SetStateAction<number>>;
  hasError?: boolean;
}

export const PaymentInput: FC<PaymentInputProps> = (props) => {
  const { setValue, hasError } = props;

  const [isError, setIsError] = React.useState(false);
  const [wholeValue, setWholeValue] = React.useState('0');
  const [fractionalValue, setFractionalValue] = React.useState('');
  const [editingFractional, setEditingFractional] = React.useState(false);
  const [wholeWidth, setWholeWidth] = React.useState(55);
  const [$whole, set$whole] = React.useState<HTMLInputElement>(null);
  const $fraction = React.useRef<HTMLInputElement>(null);
  const [font, setFont] = React.useState('');
  const [canvas, setCanvas] = React.useState(null);

  React.useEffect(() => {
    if (!wholeValue) return;
    const val = wholeValue + (fractionalValue ? '.' + fractionalValue : '');
    setValue(parseFloat(val));
  }, [wholeValue, fractionalValue]);

  const onRefChange = React.useCallback((node) => {
    if (!node) return;
    set$whole(node);
    const elem = document.getElementById('whole-amount');
    if (!elem) return;
    const font = getCanvasFontSize(elem);
    const canvas = document.createElement('canvas');
    setWholeWidth(getTextWidth(wholeValue, font, canvas));
    setFont(font);
    setCanvas(canvas);
    return node;
  }, []);

  const handleWholeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replaceAll(/^0+|[^0-9]/g, '');
    if (val.length === 0) val = '0';
    setWholeWidth(getTextWidth(val, font, canvas));
    setWholeValue(val);
  };

  const handleFractionalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFractionalValue(e.target.value.replaceAll(/^0+|[^0-9]/g, ''));
  };

  const handleWholeKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'Backspace' &&
      (wholeValue === '0' || wholeValue.length === 0)
    ) {
      setIsError(true);
      setTimeout(() => setIsError(false), 1000);
    } else if (e.key === '.') {
      e.preventDefault();
      setEditingFractional(true);
      $fraction.current.focus();
    }
  };

  const handleFractionalDelete = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !fractionalValue.length) {
      e.preventDefault();
      setEditingFractional(false);
      $whole.focus();
    }
  };

  return (
    <div className='ember-view'>
      <div
        // data-value="0"
        data-fractional-value-length={fractionalValue.length}
        // data-whole-value-length={wholeValue.length}
        className={classnames(
          'display-amount display-amount-input-component responsive',
          {
            error: isError || hasError,
            'editing-fractional-value': editingFractional,
          },
        )}
      >
        <div className='currency-symbol'>$</div>
        <input
          ref={onRefChange}
          type='tel'
          name='whole-amount-value'
          id='whole-amount'
          autoComplete='off'
          placeholder='0'
          maxLength={4}
          className='whole-amount-value ember-text-field'
          onChange={handleWholeChange}
          value={wholeValue}
          onKeyDown={handleWholeKey}
          autoFocus
          style={{ width: wholeWidth }}
        />
        <input
          ref={$fraction}
          type='tel'
          name='fractional-amount-value'
          autoComplete='off'
          tabIndex={editingFractional ? 0 : -1}
          placeholder='00'
          maxLength={2}
          onChange={handleFractionalChange}
          onKeyDown={handleFractionalDelete}
          value={fractionalValue}
          className='fractional-amount-value ember-text-field'
        />
      </div>
    </div>
  );
};

export default PaymentInput;
