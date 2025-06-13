import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext.jsx';

const useCursorHover = () => {
  const { setIsHovered } = useContext(CursorContext);

  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return {
    onMouseEnter,
    onMouseLeave
  };
};

export default useCursorHover;
