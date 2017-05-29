import styled from 'styled-jss';

const Block = styled('div')({
  position: 'absolute',
  transform: props => `translate3d(${props.left}px, ${props.top}px , 0px)`,
  borderRadius: '50%',
  minWidth: '16px',
  height: '16px',
  display: 'inline-block',
  textAlign: 'center',
  padding: '15px',
  border: 'none',
  fontWeight: 'bold',
  backgroundColor: '#ffcc33',
  '&:hover': {
    backgroundColor: 'black !important',
    color: 'white',
  },
});

export default Block;
