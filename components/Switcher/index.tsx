import HideIcon from "../icons/HideIcon";
import ExtendIcon from "../icons/ExtendIcon";

interface Props {
  isOpen: boolean;
  onClick?: () => void;
  className?: string;
  fill?: string;
}

export default ({ isOpen, ...props }: Props) =>
  isOpen ? <HideIcon {...props} /> : <ExtendIcon {...props} />;
