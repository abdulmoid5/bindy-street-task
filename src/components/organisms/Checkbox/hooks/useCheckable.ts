import {useState, useEffect} from 'react';

type UseCheckableProps = {
  // Initial checked value
  isChecked?: boolean;
  onChange?(isChecked: boolean): void;
};

export const useCheckable = (props: UseCheckableProps) => {
  const {onChange: _onChange = () => null} = props;
  const [isChecked, setIsChecked] = useState(props.isChecked);

  useEffect(() => {
    setIsChecked(props.isChecked);
  }, [props.isChecked]);

  const onChange = () => {
    const newIsChecked = !isChecked;

    if (props.isChecked === undefined) {
      setIsChecked(newIsChecked);
    }

    _onChange(newIsChecked);
  };

  return {
    isChecked,
    onChange,
  };
};
