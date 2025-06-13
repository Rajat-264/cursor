import { useContext } from 'react';
import { CursorContext } from '../context/CursorContext.jsx';

const useCursorHover = () => {
  const { setIsHovered } = useContext(CursorContext);

  return {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };
};

export default useCursorHover;
