import { Input } from "antd";

const { Search } = Input;

const CustomSearch = ({
  onSearch,
  placeholder,
  className,
}: {
  onSearch: any;
  placeholder?: string;
  className?: string;
}) => {
  const props = {
    className: `w-full ${className}`,
    placeholder: placeholder || "Search...",
    loading: false,
    onSearch: onSearch,
    enterButton: true,
  };
  return <Search {...props} />;
};

export default CustomSearch;
