import HideIcon from "../icons/HideIcon";
import ExtendIcon from "../icons/ExtendIcon";

interface Props {
  isOpen: boolean;
}

export default ({ isOpen, ...props }: Props) =>
  isOpen ? <HideIcon {...props} /> : <ExtendIcon {...props} />;
