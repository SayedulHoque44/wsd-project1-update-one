import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

const CustomInput = ({
  type,
  name,
  label,
  disabled,
  placeholder,
}: {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
}) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) =>
          type == "password" ? (
            <Form.Item label={label}>
              <Input.Password
                {...field}
                type={type}
                id={name}
                size="large"
                disabled={disabled}
                placeholder={placeholder}
              />
              {error && <small style={{ color: "red" }}>{error.message}</small>}
            </Form.Item>
          ) : (
            <Form.Item label={label}>
              <Input
                {...field}
                type={type}
                id={name}
                size="large"
                disabled={disabled}
                placeholder={placeholder}
              />
              {error && <small style={{ color: "red" }}>{error.message}</small>}
            </Form.Item>
          )
        }
      />
    </div>
  );
};

export default CustomInput;
