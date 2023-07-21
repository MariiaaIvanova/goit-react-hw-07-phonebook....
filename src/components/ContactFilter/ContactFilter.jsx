import { Div, Label, Input } from './ContactFilter.styled';
import { selectFilter } from '../redux/selectors';
import { changeFilter } from '../redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

const ContactFilter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();
    dispatch(changeFilter(normalizedValue));
  };

  return (
    <Div>
      <Label>
        Find contacts by name
              <Input
                  type="text"
                  value={value}
                  onChange={onChange} />
      </Label>
    </Div>
  );
};

export default ContactFilter;