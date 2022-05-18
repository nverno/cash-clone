import classnames from 'classnames';
import React, { FC } from 'react';

export interface PaymentNoteProps {
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
}

const PaymentNote: FC<PaymentNoteProps> = (props) => {
  const { note, setNote } = props;
  const [hasText, setHasText] = React.useState(false);

  const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 8) !hasText && setHasText(true);
    else hasText && setHasText(false);
    setNote(e.target.value);
  };

  return (
    <div
      id='note'
      className='field note-input-container prefixed-note-component'
    >
      <div className='prefix'>For:</div>
      <input
        type='text'
        autoComplete='off'
        placeholder='add a note'
        className={classnames('input ember-text-field', {
          'has-text': hasText,
        })}
        value={note}
        onChange={handleNoteChange}
      />
    </div>
  );
};

export default PaymentNote;
