import 'rockey-react/speedy';
import rockey from 'rockey-react';

export default rockey.div`
  position: absolute;
  transform: ${props => `translate3d(${props.left}px, ${props.top}px , 0px)`};
  min-width: 16px;
  height: 16px;
  display: inline-block;
  text-align: center;
  padding: 15px;
  border: none;
  font-weight: bold;
  border-radius: 50%;
  background-color: #ffcc33;
  :hover {
    background-color: black !important;
    color: white;
  }
`;
