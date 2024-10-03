export interface SvgIconProps {
  type: string;
  color: string;
  width: number;
  height: number;
}

const SvgIcon: React.FC<SvgIconProps> = ({ type, color, width, height }) => {
  return (
    <svg>
      <use
        xlinkHref={`#icon-${type}`}
        fill={color}
        width={width}
        height={height}
      ></use>
    </svg>
  );
};
export default SvgIcon;
